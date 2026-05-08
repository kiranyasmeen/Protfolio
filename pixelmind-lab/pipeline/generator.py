import time
import torch
import logging
from pathlib import Path
from typing import List, Dict, Any
from tqdm import tqdm
from .loader import load_model

logger = logging.getLogger(__name__)

def get_peak_vram() -> float:
    """Returns peak VRAM usage in MB."""
    if torch.cuda.is_available():
        return torch.cuda.max_memory_allocated() / (1024 * 1024)
    return 0.0

def run_generation(models: List[str], prompts: List[int], config_models: Dict[str, Any], test_prompts: List[str], negative_prompt: str, output_dir: Path):
    """
    Generation engine. Loops through models and prompts, tracking time and VRAM.
    """
    error_log = output_dir / "errors.log"
    results = []
    
    for model_key in tqdm(models, desc="Models"):
        model_info = config_models.get(model_key)
        if not model_info:
            continue
            
        pipeline = load_model(model_info["id"])
        if pipeline is None:
            with open(error_log, "a") as f:
                f.write(f"Failed to load {model_key}\n")
            continue
            
        model_out_dir = output_dir / model_key
        model_out_dir.mkdir(parents=True, exist_ok=True)
        
        for p_idx in tqdm(prompts, desc=f"Prompts for {model_key}", leave=False):
            prompt_text = test_prompts[p_idx]
            
            if torch.cuda.is_available():
                torch.cuda.reset_peak_memory_stats()
                
            start_time = time.time()
            
            try:
                # Generate
                image = pipeline(
                    prompt=prompt_text,
                    negative_prompt=negative_prompt,
                    num_inference_steps=model_info["steps"]
                ).images[0]
                
                inf_time = time.time() - start_time
                peak_vram = get_peak_vram()
                
                # Save image
                out_path = model_out_dir / f"{p_idx}.png"
                image.save(out_path)
                
                results.append({
                    "model": model_key,
                    "prompt_idx": p_idx,
                    "inference_time_s": inf_time,
                    "peak_vram_mb": peak_vram,
                    "image_path": str(out_path)
                })
                
            except Exception as e:
                logger.error(f"Generation failed for {model_key} prompt {p_idx}: {e}")
                with open(error_log, "a") as f:
                    f.write(f"Error {model_key} p{p_idx}: {e}\n")
                    
        # Clear GPU memory
        del pipeline
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
            
    return results
