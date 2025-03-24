# Frontend - Chatbot Application

This Next.js frontend is part of the chatbot application template, designed to provide a user-friendly interface for interacting with a RAG (Retrieval Augmented Generation) chatbot.

## Features

- Modern UI built with Next.js and TailwindCSS
- Chat interface with streaming responses
- Keyword search functionality for document retrieval
- Responsive design for all device sizes

## Directory Structure

```
frontend/
├── public/           # Static assets and resources
├── src/
│   ├── app/          # Next.js app directory (pages and layouts)
│   │   ├── page.tsx  # Home page
│   │   ├── chatbot/  # Chatbot page
│   │   ├── keyword/  # Keyword search page
│   │   └── aboutus/  # About page
│   ├── components/   # Reusable UI components
│   │   ├── ui/       # Basic UI components 
│   │   └── chat/     # Chat-specific components
│   └── lib/          # Utility functions and API clients
├── package.json      # Project dependencies and scripts
├── .env.example      # Example environment variables
└── tailwind.config.js # Tailwind CSS configuration
```

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the variables with your specific configuration

3. Start the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Key Components

### Chat Interface

The chat interface uses a streaming response system to show AI responses in real-time. Key features include:

- Message history management
- Markdown rendering for formatted responses
- Loading states for better UX

### Keyword Search

The keyword search allows users to filter and search for specific documents with:

- Date range filtering
- Category filtering
- Full-text search

## Customization

### Styling

The application uses TailwindCSS for styling:

1. Global styles are in `src/app/globals.css`
2. Theme customization can be done in `tailwind.config.js`
3. Component-specific styles are included in the component files

### API Integration

The frontend communicates with the backend API:

1. API client functions are in `src/lib/api.ts`
2. Update the API base URL in your `.env` files

### Components

To modify or extend the UI:

1. Basic UI components are in `src/components/ui/`
2. Add new components to the appropriate directories
3. Update page components in `src/app/` directories

## Best Practices

- Keep components small and focused on a single responsibility
- Use TypeScript types for better code quality
- Follow the established directory structure
- Use environment variables for configuration
- Add comments to explain complex logic 