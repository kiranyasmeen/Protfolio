import argparse
import logging
import os
from pathlib import Path
from rich.console import Console
from rich.panel import Panel
import dotenv

from setup import validate_env
from config import MODELS, TEST_PROMPTS
from colab_runner import run_colab_pipeline

dotenv.load_dotenv()
logging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"))
logger = logging.getLogger(__name__)
console = Console()

def parse_args() -> argparse.Namespace:
    """Parses command line arguments."""
    parser = argparse.ArgumentParser(description="PixelMind Lab Runner")
    parser.add_argument("--models", type=str, help="Comma-separated subset of models to run")
    parser.add_argument("--prompts", type=str, help="Comma-separated prompt indices e.g. 0,2,5")
    parser.add_argument("--skip-upload", action="store_true", help="Run locally instead of Colab")
    parser.add_argument("--dry-run", action="store_true", help="Validate config and print plan")
    return parser.parse_args()

def main():
    """Main execution entry point for PixelMind Lab."""
    args = parse_args()
    
    if not validate_env():
        console.print("[bold red]Environment validation failed. Exiting.[/bold red]")
        return
        
    selected_models = list(MODELS.keys()) if not args.models else args.models.split(",")
    selected_prompts = list(range(len(TEST_PROMPTS))) if not args.prompts else [int(i) for i in args.prompts.split(",")]
    
    if args.dry_run:
        console.print(Panel(f"DRY RUN\nModels: {selected_models}\nPrompts: {selected_prompts}", title="Execution Plan", style="cyan"))
        return
        
    console.print(Panel("Starting PixelMind Lab Pipeline", style="bold green"))
    
    try:
        run_colab_pipeline(
            models=selected_models,
            prompts=selected_prompts,
            skip_upload=args.skip_upload
        )
    except Exception as e:
        logger.error(f"Pipeline execution failed: {e}")
        return
        
    console.print("[bold green]✅ PixelMind Lab complete.[/bold green]")

if __name__ == "__main__":
    main()
