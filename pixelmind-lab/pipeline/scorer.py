import cv2
import numpy as np
import pandas as pd
from pathlib import Path
from typing import Dict, Any

def score_image(image_path: str) -> Dict[str, Any]:
    """
    Computes quality metrics for a single image.
    """
    img = cv2.imread(image_path)
    if img is None:
        return {"sharpness": 0, "color_richness": 0, "brightness_balance": 0, "composite_score": 0}
        
    # Sharpness: Laplacian variance
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    sharpness = cv2.Laplacian(gray, cv2.CV_64F).var()
    
    # Color Richness: Mean HSV saturation
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    saturation = hsv[:, :, 1].mean()
    
    # Brightness Balance
    brightness = gray.mean()
    brightness_score = 100
    if brightness < 40 or brightness > 215:
        brightness_score = 50 # Penalize
        
    # Normalize metrics (heuristics for 0-100 scale)
    norm_sharp = min(100, sharpness / 10.0)
    norm_sat = min(100, (saturation / 255.0) * 100)
    
    # Composite Score
    composite = (norm_sharp * 0.4) + (norm_sat * 0.4) + (brightness_score * 0.2)
    
    return {
        "sharpness": norm_sharp,
        "color_richness": norm_sat,
        "brightness_balance": brightness_score,
        "composite_score": composite
    }

def analyze_results(results: list) -> pd.DataFrame:
    """Analyzes a list of generation results and returns a DataFrame."""
    analyzed = []
    for row in results:
        scores = score_image(row["image_path"])
        analyzed.append({**row, **scores})
        
    return pd.DataFrame(analyzed)
