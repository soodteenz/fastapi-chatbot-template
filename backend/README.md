# Backend - Chatbot Application

This FastAPI backend is part of the chatbot application template, designed to provide a robust API for a RAG (Retrieval Augmented Generation) chatbot system.

## Features

- RESTful API built with FastAPI
- Chat functionality with response streaming
- Document retrieval from vector databases (Pinecone)
- Keyword search with filtering capabilities
- Integration with MongoDB for document storage

## Directory Structure

```
backend/
├── api/                  # API module
│   ├── main.py           # Main application entry point
│   ├── routers/          # API route handlers
│   │   ├── chat_route.py # Chat endpoint handlers
│   │   └── keyword_search_route.py # Keyword search endpoint handlers
├── core/                 # Core functionality
│   ├── config.py         # Configuration settings
│   ├── logging.py        # Logging setup
│   └── security.py       # Security utilities
├── models/               # Data models
│   ├── chat.py           # Chat message models
│   └── documents.py      # Document models
├── service/              # Business logic services
│   ├── chat_service.py   # Chat processing service
│   └── vector_store.py   # Vector store service
├── requirements.txt      # Python dependencies
├── .env.example          # Example environment variables
└── pyproject.toml        # Project metadata
```

## Setup

1. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your specific configuration

4. Start the development server:
   ```
   uvicorn api.main:app --reload
   ```

## Key Components

### Chat Service

The chat service handles:

- Processing user messages
- Retrieving relevant context from the vector store
- Generating responses using an LLM
- Streaming responses back to the client

### Vector Store Integration

The backend connects to Pinecone for vector storage:

- Document embedding and storage
- Semantic search based on user queries
- Retrieval of relevant context for the chatbot

### Document Search

The keyword search functionality provides:

- Full-text search across documents
- Filtering by metadata (dates, categories, etc.)
- Sorting and pagination of results

## API Endpoints

### Chat Endpoints

- `POST /chat`: Process a chat message and return a response
  - Request Body:
    ```json
    {
      "message": "string",
      "chat_history": [{"role": "string", "content": "string"}]
    }
    ```
  - Response: Streamed AI response

### Keyword Search Endpoints

- `GET /articles`: Get filtered articles
  - Query Parameters:
    - `gender_category`: string (optional)
    - `country`: string (optional)
    - `start_date`: date (optional)
    - `end_date`: date (optional)
    - `search_term`: string (optional)
  - Response: Array of article objects

## Customization

### Environment Configuration

Configure your application through environment variables:

- API keys for external services
- Database connection strings
- Logging levels and configuration

### Adding New Endpoints

To add new API endpoints:

1. Create a new router file in the `api/routers/` directory
2. Implement the endpoint handlers
3. Register the router in `api/main.py`

### Database Integration

The application is designed to work with:

- MongoDB for document storage
- Pinecone for vector embeddings

Update the connection settings in your environment variables.

## Best Practices

- Use Python's logging module (`.info` and `.warning` methods are recommended)
- Follow type hints throughout the codebase
- Keep functions small and focused on a single task
- Document your code with comments
- Write tests for critical functionality 