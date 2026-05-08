# PixelMind Lab

A complete, production-grade local project that programmatically controls Google Colab via the `colabcode` / `google-colab-antigravity` approach to run text-to-image AI pipelines.

## Setup

Run the following commands to get started:

```bash
git clone <repo> && cd pixelmind-lab
pip install -r requirements.txt
python main.py --dry-run
```

## Configuration
Copy `.env.example` to `.env` and add your Hugging Face Token (`HF_TOKEN`).

## Usage
Run the pipeline with `python main.py`. Use `--help` to see available options like `--models` and `--prompts`.
