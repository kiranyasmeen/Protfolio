from pathlib import Path

# Model Registry
MODELS = {
    "sdxl-turbo":    { "id": "stabilityai/sdxl-turbo",               "steps": 1,  "vram_min_gb": 6  },
    "flux-schnell":  { "id": "black-forest-labs/FLUX.1-schnell",      "steps": 4,  "vram_min_gb": 10 },
    "sd-2-1":        { "id": "stabilityai/stable-diffusion-2-1",      "steps": 20, "vram_min_gb": 5  },
    "wuerstchen":    { "id": "warp-ai/wuerstchen",                    "steps": 12, "vram_min_gb": 4  },
    "kandinsky-3":   { "id": "kandinsky-community/kandinsky-3",       "steps": 25, "vram_min_gb": 8  },
}

TEST_PROMPTS = [
    "photorealistic portrait of a young woman, golden hour, 8k",
    "epic fantasy mountain landscape, dramatic clouds, concept art",
    "cyberpunk city at night, neon reflections, rain, blade runner",
    "watercolor botanical art, wildflowers, soft pastel tones",
    "abstract geometric 3D render, glass spheres, studio lighting",
    "Pakistani farmer in a wheat field at golden hour, cinematic",
]

NEGATIVE_PROMPT = "blurry, low quality, distorted, watermark, text, ugly"
OUTPUT_DIR = Path("outputs")
RESULTS_CSV = OUTPUT_DIR / "results.csv"
