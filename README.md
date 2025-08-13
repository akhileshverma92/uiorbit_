# UIOrbit - Frontend UI Library Hub

<div align="center">
  <img src="https://via.placeholder.com/120x120/3B82F6/FFFFFF?text=UIOrbit" alt="UIOrbit Logo" width="120" height="120" style="border-radius: 24px;">
  
  <h3>🚀 A Central Hub for Frontend UI Libraries</h3>
  <p>Discover, compare, and install the best UI libraries for React, Next.js, and modern web development.</p>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
</div>

## ✨ Features

### Core MVP Features
- **📚 Library Cards**: Beautiful grid layout showcasing UI libraries with ratings, logos, and quick install commands
- **🔍 Smart Search & Filter**: Real-time search with multiple sorting options (Alphabetical, Rating, Recently Added, Downloads)
- **📊 Library Statistics**: Overview of total libraries, average ratings, and community metrics
- **📱 Responsive Design**: Optimized for all devices from mobile to desktop
- **⚡ Quick Install**: One-click copy of installation commands
- **🎯 Detailed Views**: Comprehensive library information with features, documentation links, and GitHub repos

### Additional Features
- **🏷️ Tag System**: Filter libraries by technology stack (React, TypeScript, Tailwind, etc.)
- **⭐ Rating System**: Community-driven ratings for each library
- **📈 Download Statistics**: Weekly download counts for popularity insights
- **🔗 External Links**: Direct access to documentation and GitHub repositories
- **🎨 Modern UI**: Clean, professional design with smooth animations and micro-interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Data Storage**: Local JSON file (following hackathon requirements)
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/uiorbit.git
   cd uiorbit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Main navigation header
│   ├── SearchBar.tsx   # Search and filter functionality
│   ├── LibraryCard.tsx # Individual library cards
│   ├── LibraryDetail.tsx # Detailed library modal
│   └── Stats.tsx       # Statistics overview
├── data/
│   └── libraries.json  # Library data (static for MVP)
├── hooks/
│   └── useLibraries.ts # Custom hook for library management
├── types/
│   └── library.ts      # TypeScript interfaces
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 📊 Data Structure

Each library in the system contains:

```typescript
interface Library {
  id: string;
  name: string;
  logo: string;
  overview: string;
  rating: number;
  installCommand: string;
  tags: string[];
  description: string;
  features: string[];
  docsUrl: string;
  githubUrl: string;
  weeklyDownloads: string;
  dateAdded: string;
}
```

## 🎯 Roadmap

### Phase 1 (MVP - Current)
- [x] Basic library cards and grid layout
- [x] Search and filtering functionality
- [x] Detailed library views
- [x] Responsive design
- [x] Static data from JSON

### Phase 2 (Future Enhancements)
- [ ] User authentication and favorites
- [ ] Community ratings and reviews
- [ ] API integration for real-time data
- [ ] Advanced filtering (by framework, size, etc.)
- [ ] Library comparison tool
- [ ] Submission system for new libraries

### Phase 3 (Advanced Features)
- [ ] AI-powered library recommendations
- [ ] Integration with package managers
- [ ] Performance benchmarks
- [ ] Compatibility matrix
- [ ] Community discussions

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding New Libraries
1. Fork the repository
2. Add your library to `src/data/libraries.json`
3. Ensure all required fields are filled
4. Submit a pull request

### Development Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Library Data Format
When adding a new library, please follow this format:

```json
{
  "id": "unique-library-id",
  "name": "Library Name",
  "logo": "https://example.com/logo.png",
  "overview": "Brief description (max 100 chars)",
  "rating": 4.5,
  "installCommand": "npm install library-name",
  "tags": ["React", "TypeScript", "CSS-in-JS"],
  "description": "Detailed description of the library",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "docsUrl": "https://library-docs.com",
  "githubUrl": "https://github.com/user/library",
  "weeklyDownloads": "1.2M",
  "dateAdded": "2024-01-15"
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Vite** for the lightning-fast build tool
- **Open Source Community** for inspiration and libraries featured

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/uiorbit/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/uiorbit/discussions)
- 📧 **Email**: support@uiorbit.dev
- 🐦 **Twitter**: [@UIOrbit](https://twitter.com/uiorbit)

---

<div align="center">
  <p>Made with ❤️ for the frontend community</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>