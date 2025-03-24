export default function KeywordSearchPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Keyword Search</h1>
      <p className="mb-8">
        Search for specific documents using keywords, filters, and date ranges.
      </p>
      
      {/* Search form */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search term */}
            <div className="col-span-3">
              <label htmlFor="search" className="block text-sm font-medium mb-2">
                Search Term
              </label>
              <input
                type="text"
                id="search"
                placeholder="Enter keywords..."
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Gender category */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-2">
                Gender Category
              </label>
              <select
                id="gender"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                <option value="gender-equality">Gender Equality</option>
                <option value="womens-rights">Women's Rights</option>
                <option value="lgbtq-rights">LGBTQ+ Rights</option>
              </select>
            </div>
            
            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-2">
                Country
              </label>
              <select
                id="country"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Countries</option>
                <option value="jamaica">Jamaica</option>
                <option value="trinidad">Trinidad and Tobago</option>
                <option value="barbados">Barbados</option>
              </select>
            </div>
            
            {/* Date range */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-2">
                Date Range
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  id="start-date"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="self-center">to</span>
                <input
                  type="date"
                  id="end-date"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      
      {/* Results placeholder */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Search Results</h2>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Sample Article 1</h3>
          <p className="text-gray-300 mb-4">
            This is a sample article about gender equality in Jamaica. The article discusses various policies and initiatives...
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Source: Sample News</span>
            <span>Published: Jan 15, 2023</span>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Sample Article 2</h3>
          <p className="text-gray-300 mb-4">
            This article examines women's rights in Trinidad and Tobago, focusing on recent legislative changes and their impact...
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Source: Sample Journal</span>
            <span>Published: Mar 8, 2023</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mt-8">
        Note: This is a placeholder interface. In a real implementation, this would connect to a backend API.
      </p>
    </div>
  );
} 