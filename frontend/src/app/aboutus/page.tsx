export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About This Project</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-300">
            This chatbot application is designed to provide an intuitive interface for interacting with a collection of documents.
            Using a Retrieval Augmented Generation (RAG) approach, the chatbot can answer questions based on the content of the documents
            in the database.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Chat interface for natural language interaction with documents</li>
            <li>Keyword search functionality with filtering options</li>
            <li>Document retrieval based on relevance to queries</li>
            <li>Streaming responses for better user experience</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>FastAPI</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Pinecone (Vector Database)</li>
                <li>LangChain</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <p className="text-gray-300">
            This project was developed by [Your Team/Organization Name]. For more information or to report issues,
            please contact us at [contact email].
          </p>
        </section>
      </div>
    </div>
  );
} 