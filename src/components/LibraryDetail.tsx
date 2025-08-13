import React from 'react';
import { X, Star, Download, ExternalLink, Github, Copy, Check, ArrowLeft } from 'lucide-react';
import { Library } from '../types/library';

interface LibraryDetailProps {
  library: Library;
  onClose: () => void;
}

const LibraryDetail: React.FC<LibraryDetailProps> = ({ library, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(library.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Libraries</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={library.logo}
                  alt={`${library.name} logo`}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white text-xl font-bold flex items-center justify-center">
                  {library.name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {library.name}
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                  {library.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{library.rating}</span>
                    <span className="text-gray-500">rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold">{library.weeklyDownloads}</span>
                    <span className="text-gray-500">weekly downloads</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {library.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {library.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Installation
                </h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Terminal</span>
                    <button
                      onClick={handleCopyInstall}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <code className="text-green-400 font-mono text-sm">
                    {library.installCommand}
                  </code>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Resources
                </h2>
                <div className="space-y-3">
                  <a
                    href={library.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">Documentation</div>
                      <div className="text-sm text-gray-500">Official docs and guides</div>
                    </div>
                  </a>
                  <a
                    href={library.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                    <div>
                      <div className="font-medium text-gray-900">GitHub Repository</div>
                      <div className="text-sm text-gray-500">Source code and issues</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetail;