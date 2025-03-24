# Customization Guide

This document provides detailed instructions on how to customize the chatbot application template for your specific needs.

## Table of Contents

1. [Project Renaming](#project-renaming)
2. [Frontend Customization](#frontend-customization)
3. [Backend Customization](#backend-customization)
4. [Database Configuration](#database-configuration)
5. [Vector Store Integration](#vector-store-integration)
6. [Deployment Considerations](#deployment-considerations)

## Project Renaming

When creating a new project from this template, you should update the project name in several places:

1. **Frontend**:
   - Update the `name` field in `frontend/package.json`
   - Update the title in `frontend/src/app/layout.tsx`
   - Update the application name in `.env` files

2. **Backend**:
   - Update the project name in `backend/pyproject.toml`
   - Update the API title in `backend/api/main.py`

## Frontend Customization

### Theme and Styling

The application uses TailwindCSS for styling. To customize the appearance:

1. **Colors and Typography**:
   - Modify the theme variables in `frontend/src/app/globals.css`
   - Update the Tailwind configuration in `frontend/tailwind.config.js`

2. **Layout**:
   - Modify the layout component in `frontend/src/app/layout.tsx`
   - Update page layouts in their respective directories

### Pages

Each page can be customized to fit your specific requirements:

1. **Home Page** (`frontend/src/app/page.tsx`):
   - Update the welcome message and description
   - Modify the call-to-action buttons

2. **Chatbot Page** (`frontend/src/app/chatbot/page.tsx`):
   - Customize the chat interface
   - Add additional features like chat history saving

3. **Keyword Search Page** (`frontend/src/app/keyword/page.tsx`):
   - Modify the search filters based on your document metadata
   - Customize the results display

4. **About Page** (`frontend/src/app/aboutus/page.tsx`):
   - Update the project description
   - Add team information and contact details

### API Integration

The frontend communicates with the backend through the API client:

1. **API Client** (`frontend/src/lib/api.ts`):
   - Update the API endpoints to match your backend routes
   - Modify the data models to match your backend schemas
   - Implement proper error handling

## Backend Customization

### API Endpoints

The backend provides several API endpoints that can be customized:

1. **Chat Endpoint** (`backend/api/routers/chat_route.py`):
   - Implement the actual chat functionality with your LLM of choice
   - Customize the response streaming
   - Add authentication if needed

2. **Keyword Search Endpoint** (`backend/api/routers/keyword_search_route.py`):
   - Modify the search parameters based on your document metadata
   - Implement the actual database queries
   - Add sorting and pagination options

### Adding New Endpoints

To add new functionality:

1. Create a new router file in `backend/api/routers/`
2. Implement your endpoint handlers
3. Register the router in `backend/api/main.py`

Example of adding a new router:

```python
# In backend/api/routers/new_feature_route.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/feature")
async def get_feature():
    return {"message": "New feature"}

# In backend/api/main.py
from .routers import new_feature_router

app.include_router(new_feature_router, prefix="/feature", tags=["feature"])
```

## Database Configuration

### MongoDB Integration

The application is designed to work with MongoDB:

1. **Connection Setup**:
   - Update the MongoDB connection string in `.env`
   - Configure database name and collection names

2. **Document Models**:
   - Modify the document models in `backend/models/` to match your data structure
   - Update the database access methods in your service files

### Schema Design

Consider the following when designing your document schema:

1. **Searchable Fields**:
   - Include fields that users will want to search by
   - Add appropriate indexes for frequently queried fields

2. **Metadata**:
   - Include relevant metadata for filtering (dates, categories, etc.)
   - Consider how to structure nested data

## Vector Store Integration

### Pinecone Setup

The application uses Pinecone for vector storage:

1. **API Configuration**:
   - Create a Pinecone account and index
   - Update the Pinecone API key and environment in `.env`

2. **Document Embedding**:
   - Implement document embedding using your preferred embedding model
   - Configure the vector dimensions to match your embedding model

3. **Query Integration**:
   - Customize the vector search queries in your chat service
   - Adjust relevance scoring if needed

## Deployment Considerations

### Environment Configuration

For production deployment:

1. **Environment Variables**:
   - Create proper production `.env` files
   - Never commit sensitive information to version control

2. **CORS Settings**:
   - Update the CORS settings in `backend/api/main.py` to allow only your frontend domain

### Performance Optimization

Consider these optimizations for production:

1. **Frontend**:
   - Build the frontend for production: `npm run build`
   - Consider using a CDN for static assets

2. **Backend**:
   - Use a production ASGI server like Uvicorn behind Nginx
   - Implement caching for frequently accessed data
   - Consider using connection pooling for database access

### Monitoring and Logging

Set up proper monitoring:

1. **Logging**:
   - Configure logging levels appropriately
   - Consider using a centralized logging service

2. **Performance Monitoring**:
   - Implement request timing
   - Monitor database and API performance 