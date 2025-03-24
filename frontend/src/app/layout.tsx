import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chatbot Application",
  description: "A RAG-based chatbot application for document search and interaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <header className="border-b border-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Chatbot Application</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li>
                  <Link href="/chatbot" className="hover:text-blue-400">Chatbot</Link>
                </li>
                <li>
                  <Link href="/keyword" className="hover:text-blue-400">Keyword Search</Link>
                </li>
                <li>
                  <Link href="/aboutus" className="hover:text-blue-400">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
} 