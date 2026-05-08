import pandas as pd
from pathlib import Path
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

console = Console()

def generate_report(df: pd.DataFrame, output_dir: Path):
    """
    Generates the final terminal report and saves results.
    """
    if df.empty:
        console.print("[bold red]No results to report.[/bold red]")
        return
        
    # Save CSV
    csv_path = output_dir / "results.csv"
    df.to_csv(csv_path, index=False)
    
    # Metrics
    best_overall = df.groupby('model')['composite_score'].mean().idxmax()
    fastest = df.groupby('model')['inference_time_s'].mean().idxmin()
    most_vram_efficient = df.groupby('model')['peak_vram_mb'].mean().idxmin()
    
    # Terminal Report
    console.print("\n")
    console.print(Panel("[bold cyan]PixelMind Lab Analysis Report[/bold cyan]"))
    
    table = Table(show_header=False, box=None)
    table.add_row("🏆 [bold]Best overall model:[/bold]", best_overall)
    table.add_row("⚡ [bold]Fastest model:[/bold]", fastest)
    table.add_row("💾 [bold]Most VRAM-efficient:[/bold]", most_vram_efficient)
    
    console.print(table)
    console.print("\n[bold]Recommendation:[/bold]")
    console.print(f"Based on the analysis, {best_overall} offers the best quality, while {fastest} is recommended for speed-critical tasks.")
    
    # Save Report MD
    report_path = output_dir / "report.md"
    with open(report_path, "w") as f:
        f.write("# PixelMind Lab Report\n\n")
        f.write(f"- **Best overall model**: {best_overall}\n")
        f.write(f"- **Fastest model**: {fastest}\n")
        f.write(f"- **Most VRAM-efficient**: {most_vram_efficient}\n")
        
    console.print("\n[bold green]✅ PixelMind Lab complete.[/bold green]")
