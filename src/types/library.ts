export interface Library {
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