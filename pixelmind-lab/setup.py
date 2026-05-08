import os
import sys
import logging
from dotenv import load_dotenv

logger = logging.getLogger(__name__)

def validate_env() -> bool:
    """
    Validates the local environment setup.
    Checks Python version and required environment variables.
    """
    logger.info("Validating environment...")
    
    if sys.version_info < (3, 8):
        logger.error("Python 3.8+ is required.")
        return False
        
    load_dotenv()
    hf_token = os.getenv("HF_TOKEN")
    
    if not hf_token or hf_token == "your_huggingface_token_here":
        logger.error("HF_TOKEN not found or invalid in .env file.")
        return False
        
    logger.info("Environment is valid.")
    return True

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    if not validate_env():
        sys.exit(1)
    print("Environment validation passed.")
