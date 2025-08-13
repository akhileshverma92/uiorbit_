import React from 'react';
import { Star, Download, ExternalLink, Copy, Check } from 'lucide-react';
import { Library } from '../types/library';

interface LibraryCardProps {
  library: Library;
  onClick: () => void;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ library, onClick }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyInstall = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(library.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={library.logo}
                alt={`${library.name} logo`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded text-white text-sm font-bold flex items-center justify-center">
                {library.name.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {library.name}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{library.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Download className="w-4 h-4" />
            <span>{library.weeklyDownloads}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {library.overview}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {library.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {library.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{library.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleCopyInstall}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Install</span>
              </>
            )}
          </button>
          
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>View Details</span>
            <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;