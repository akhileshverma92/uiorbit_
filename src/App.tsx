import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LibraryCard from './components/LibraryCard';
import LibraryDetail from './components/LibraryDetail';
import Stats from './components/Stats';
import { useLibraries } from './hooks/useLibraries';
import { Library } from './types/library';
import { Analytics } from "@vercel/analytics/next"

function App() {
  const {
    libraries,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    stats,
  } = useLibraries();

  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Analytics/>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover the Perfect UI Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find, compare, and install the best frontend UI libraries for your React, Next.js, 
            and modern web projects. Save time and build better interfaces.
          </p>
        </div>

        <Stats 
          totalLibraries={stats.totalLibraries}
          averageRating={stats.averageRating}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {libraries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No libraries found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraries.map((library) => (
              <LibraryCard
                key={library.id}
                library={library}
                onClick={() => setSelectedLibrary(library)}
              />
            ))}
          </div>
        )}

        {selectedLibrary && (
          <LibraryDetail
            library={selectedLibrary}
            onClose={() => setSelectedLibrary(null)}
          />
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Built with ❤️ for the frontend community. 
              <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">
                Contribute on GitHub
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              UIOrbit © 2024 - MIT License
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;