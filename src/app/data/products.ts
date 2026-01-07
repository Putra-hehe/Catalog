export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'templates' | 'ui-kits' | 'code' | 'notion' | 'assets';
  price: number;
  image: string;
  tags: string[];
  isFree?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
  downloads?: number;
  version?: string;
  lastUpdated?: string;
  includes?: string[];
  techStack?: string[];
}

export const products: Product[] = [
  {
    id: 'solo-leveling-productivity',
    name: 'Solo Leveling Productivity System',
    description: 'Complete productivity system with leveling mechanics, daily quests, and progress visualization.',
    category: 'notion',
    price: 29,
    image: '/images/solo-leveling.png',
    tags: ['Productivity', 'Notion', 'RPG System', 'Progress Tracking'],
    isFeatured: true,
    isNew: true,
    rating: 4.9,
    downloads: 1247,
    version: '2.0',
    lastUpdated: 'January 2026',
    includes: ['Notion Template', 'Setup Guide', 'Video Tutorial', 'Lifetime Updates'],
    techStack: ['Notion'],
  },
  {
    id: 'minimal-portfolio-template',
    name: 'Minimal Portfolio Template',
    description: 'Clean, modern portfolio template for developers and designers.',
    category: 'templates',
    price: 19,
    image: '/images/portofolio.png',
    tags: ['React', 'Tailwind', 'Portfolio', 'Minimal'],
    isFeatured: true,
    rating: 4.8,
    downloads: 892,
    version: '1.5',
    lastUpdated: 'December 2025',
    includes: ['React Source Code', 'Tailwind Config', 'Deployment Guide'],
    techStack: ['React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'dev-toolkit',
    name: 'Developer Toolkit',
    description: 'Essential utilities for modern web development.',
    category: 'code',
    price: 0,
    image: 'https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?w=600',
    tags: ['Free', 'Utilities', 'CLI', 'Dev Tools'],
    isFree: true,
    isFeatured: true,
    rating: 4.7,
    downloads: 3421,
    version: '3.2',
    lastUpdated: 'January 2026',
    includes: ['CLI Tools', 'VS Code Extensions', 'Configuration Files'],
    techStack: ['Node.js', 'TypeScript'],
  },
  {
    id: 'ui-component-library',
    name: 'Modern UI Component Library',
    description: 'Production-ready React components with Tailwind CSS.',
    category: 'ui-kits',
    price: 39,
    image: 'https://images.unsplash.com/photo-1730206562928-0efd62560435?w=600',
    tags: ['React', 'Components', 'Tailwind', 'TypeScript'],
    isFeatured: true,
    rating: 4.9,
    downloads: 654,
    version: '1.0',
    lastUpdated: 'December 2025',
    includes: ['50+ Components', 'Storybook', 'TypeScript Definitions', 'Documentation'],
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Storybook'],
  },
  {
    id: 'icon-pack-minimal',
    name: 'Minimal Icon Pack',
    description: '200+ carefully crafted minimal icons for your projects.',
    category: 'assets',
    price: 15,
    image: 'https://images.unsplash.com/photo-1617294891800-30497d3cbee7?w=600',
    tags: ['Icons', 'SVG', 'Minimal', 'Design'],
    rating: 4.6,
    downloads: 1823,
    version: '2.1',
    lastUpdated: 'November 2025',
    includes: ['200+ Icons', 'SVG & PNG', 'Multiple Sizes', 'Figma File'],
    techStack: ['SVG'],
  },
  {
    id: 'task-management-notion',
    name: 'Task Management System',
    description: 'Comprehensive task management with GTD methodology.',
    category: 'notion',
    price: 12,
    image: 'https://images.unsplash.com/photo-1700887937204-69f8b8400ace?w=600',
    tags: ['Notion', 'Tasks', 'GTD', 'Productivity'],
    rating: 4.7,
    downloads: 956,
    version: '1.8',
    lastUpdated: 'January 2026',
    includes: ['Notion Template', 'Setup Guide', 'Best Practices'],
    techStack: ['Notion'],
  },
];

export const bundles = [
  {
    id: 'starter-pack',
    name: 'Developer Starter Pack',
    description: 'Everything you need to start building amazing products.',
    products: ['solo-leveling-productivity', 'minimal-portfolio-template', 'dev-toolkit'],
    price: 39,
    savings: 9,
    image: 'https://images.unsplash.com/photo-1617294891800-30497d3cbee7?w=600',
    tags: ['Bundle', 'Starter', 'Best Value'],
  },
  {
    id: 'complete-bundle',
    name: 'Complete Creator Bundle',
    description: 'All products included. Best value for serious builders.',
    products: products.map((p) => p.id),
    price: 99,
    savings: 45,
    image: 'https://images.unsplash.com/photo-1700887937204-69f8b8400ace?w=600',
    tags: ['Bundle', 'Complete', 'Best Deal'],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
