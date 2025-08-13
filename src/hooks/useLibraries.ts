import { useState, useEffect, useMemo } from 'react';
import { Library } from '../types/library';
import librariesData from '../data/libraries.json';

export const useLibraries = () => {
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');

  useEffect(() => {
    setLibraries(librariesData as Library[]);
  }, []);

  const filteredAndSortedLibraries = useMemo(() => {
    let filtered = libraries.filter((library) =>
      library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      library.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      library.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'recently-added':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'downloads':
        filtered.sort((a, b) => {
          const aDownloads = parseFloat(a.weeklyDownloads.replace(/[^\d.]/g, ''));
          const bDownloads = parseFloat(b.weeklyDownloads.replace(/[^\d.]/g, ''));
          return bDownloads - aDownloads;
        });
        break;
      default: // alphabetical
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [libraries, searchTerm, sortBy]);

  const stats = useMemo(() => {
    const totalLibraries = libraries.length;
    const averageRating = libraries.reduce((sum, lib) => sum + lib.rating, 0) / libraries.length || 0;
    
    return { totalLibraries, averageRating };
  }, [libraries]);

  return {
    libraries: filteredAndSortedLibraries,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    stats,
  };
};