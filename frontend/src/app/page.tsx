import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Chatbot Application</h1>
      <p className="text-xl mb-10 max-w-2xl">
        This application allows you to interact with documents through a chatbot interface
        or search for specific documents using keywords and filters.
      </p>
      
      <div className="flex gap-6">
        <Link 
          href="/chatbot" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Chat with Documents
        </Link>
        <Link 
          href="/keyword" 
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Keyword Search
        </Link>
      </div>
    </div>
  );
} 