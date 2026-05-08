import torch
import logging
from diffusers import AutoPipelineForText2Image
from typing import Any, Optional

logger = logging.getLogger(__name__)

def load_model(model_id: str) -> Optional[Any]:
    """
    Loads a diffusers model smartly into GPU memory.
    """
    logger.info(f"Loading model: {model_id}")
    try:
        pipeline = AutoPipelineForText2Image.from_pretrained(
            model_id,
            torch_dtype=torch.float16,
            variant="fp16",
            use_safetensors=True
        )
        if torch.cuda.is_available():
            pipeline = pipeline.to("cuda")
        return pipeline
    except Exception as e:
        logger.error(f"Failed to load model {model_id}. Error: {e}")
        return None
