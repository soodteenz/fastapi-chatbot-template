"""
Main FastAPI application entry point.
"""

import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .routers import chat_router, keyword_search_router

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title="Chatbot API",
    description="API for RAG-based chatbot application",
    version="0.1.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this with specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chat_router, prefix="/chat", tags=["chat"])
app.include_router(keyword_search_router, prefix="/articles", tags=["articles"])

@app.get("/", tags=["health"])
async def root():
    """
    Root endpoint to check if the API is running.
    """
    logger.info("Health check endpoint called")
    return JSONResponse(
        content={"status": "ok", "message": "Welcome to the Chatbot API"},
        status_code=200,
    )

@app.get("/health", tags=["health"])
async def health_check():
    """
    Health check endpoint.
    """
    logger.info("Health check endpoint called")
    return JSONResponse(
        content={"status": "ok", "message": "API is healthy"},
        status_code=200,
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api.main:app", host="0.0.0.0", port=8000, reload=True) 