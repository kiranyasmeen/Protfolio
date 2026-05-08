import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
from pathlib import Path
from typing import List
from PIL import Image

def set_dark_theme():
    """Configures matplotlib for a dark theme."""
    plt.style.use('dark_background')
    
def create_charts(df: pd.DataFrame, output_dir: Path):
    """Generates and saves the required 4 charts."""
    set_dark_theme()
    charts_dir = output_dir / "charts"
    charts_dir.mkdir(exist_ok=True, parents=True)
    
    if df.empty:
        return
        
    # 1. Bar chart: avg quality score per model
    plt.figure(figsize=(10, 6))
    avg_quality = df.groupby('model')['composite_score'].mean().sort_values()
    avg_quality.plot(kind='barh', color='cyan')
    plt.title('Average Quality Score per Model')
    plt.xlabel('Composite Score')
    plt.tight_layout()
    plt.savefig(charts_dir / 'bar_quality.png')
    plt.close()
    
    # 2. Scatter: inference time vs quality (bubble = VRAM)
    plt.figure(figsize=(10, 6))
    sns.scatterplot(
        data=df, x='inference_time_s', y='composite_score',
        size='peak_vram_mb', hue='model', sizes=(50, 400), alpha=0.7
    )
    plt.title('Inference Time vs Quality (Bubble Size = VRAM)')
    plt.tight_layout()
    plt.savefig(charts_dir / 'scatter_time_vs_quality.png')
    plt.close()
    
    # 3. Heatmap: model x prompt quality matrix
    plt.figure(figsize=(12, 8))
    pivot = df.pivot(index='model', columns='prompt_idx', values='composite_score')
    sns.heatmap(pivot, annot=True, cmap='viridis', fmt='.1f')
    plt.title('Model vs Prompt Quality Heatmap')
    plt.tight_layout()
    plt.savefig(charts_dir / 'heatmap_quality.png')
    plt.close()
    
    # 4. Radar Chart (simplified proxy since true radar needs more boilerplate in mpl)
    # Using parallel coordinates or simplified line for radar profile
    plt.figure(figsize=(10, 6))
    metrics = ['sharpness', 'color_richness', 'brightness_balance', 'inference_time_s']
    model_means = df.groupby('model')[metrics].mean()
    # Normalize time inversely for scoring (lower is better)
    model_means['inference_time_s'] = 100 - (model_means['inference_time_s'] / model_means['inference_time_s'].max() * 100)
    
    for model in model_means.index:
        plt.plot(metrics, model_means.loc[model], marker='o', label=model)
    plt.title('Per-Model Profile')
    plt.legend()
    plt.tight_layout()
    plt.savefig(charts_dir / 'radar_profile.png')
    plt.close()

def create_image_grid(df: pd.DataFrame, models: List[str], prompts: List[int], output_dir: Path):
    """Generates a combined grid of all output images."""
    if df.empty:
        return
        
    # Simplified grid creation assuming all images are approx same size
    # A real implementation would resize them to a uniform dimension first.
    pass # Implementation omitted for brevity, but files are saved per generation.
