export default function ChatbotPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chat with Documents</h1>
      <p className="mb-8">
        Ask questions about the documents in our database. The chatbot will retrieve relevant information and provide answers.
      </p>
      
      {/* Chat interface placeholder */}
      <div className="border border-gray-700 rounded-lg p-4 h-[60vh] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {/* System message */}
          <div className="flex items-start">
            <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-400">System</p>
              <p>Welcome to the document chatbot! How can I help you today?</p>
            </div>
          </div>
          
          {/* This would be populated with actual chat messages in a real implementation */}
        </div>
        
        {/* Input area */}
        <div className="border-t border-gray-700 pt-4">
          <form className="flex gap-2">
            <input 
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mt-4">
        Note: This is a placeholder interface. In a real implementation, this would connect to a backend API.
      </p>
    </div>
  );
} 