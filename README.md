# Chatbot Application Template

## Project Overview

This template is designed for building chatbot applications that can:
- Enable users to chat with document collections stored in vector databases
- Provide keyword search capabilities for document retrieval
- Support streaming responses for better user experience

## Directory Structure

```
template/
├── frontend/         # Next.js frontend application
│   ├── public/       # Static assets
│   └── src/          # Source code
│       ├── app/      # Next.js app directory
│       ├── components/ # Reusable UI components
│       └── lib/      # Utility functions and hooks
├── backend/          # FastAPI backend application
│   ├── api/          # API endpoints
│   │   └── routers/  # API route handlers
│   ├── core/         # Core functionality and configurations
│   ├── models/       # Data models and schemas
│   └── service/      # Business logic services
└── docs/             # Documentation files
```

## Getting Started

### Setting Up a New Project

1. Copy the entire template directory to your new project location
2. Rename the project in the following files:
   - `frontend/package.json` (update "name" field)
   - `backend/pyproject.toml` (update project metadata)
   - Update environment configuration files

### Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file based on `.env.example`
4. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory
2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Create a `.env` file based on `.env.example`
5. Start the development server:
   ```
   python -m api.main
   ```

## Customization Guide

### Frontend Customization

1. **Theme and Styling**:
   - Modify `src/app/globals.css` for global styles
   - Update Tailwind configuration in `tailwind.config.js`

2. **Pages and Components**:
   - Customize page content in `src/app/page.tsx`
   - Modify or extend components in `src/components/`

3. **API Integration**:
   - Update API endpoint URLs in `.env` files
   - Customize API client functions in `src/lib/`

### Backend Customization

1. **API Endpoints**:
   - Modify existing routes in `api/routers/`
   - Add new routes by creating new files in the routers directory

2. **Database Configuration**:
   - Configure database connections in `.env` file
   - Update database models in the `models` directory

3. **Vector Database Integration**:
   - Configure vector database settings in `.env` file
   - Update vector store configuration in the appropriate service files

## Best Practices

- Keep code readable and well-commented
- Follow the established directory structure for better organization
- Use environment variables for configuration
- Document any major changes or extensions to the template

## Troubleshooting

Common issues and their solutions:

- **API Connection Issues**: Ensure backend server is running and CORS is properly configured
- **Environment Variables**: Make sure all required environment variables are set
- **Dependencies**: Verify all dependencies are installed correctly

## License

[Specify your license here] 
