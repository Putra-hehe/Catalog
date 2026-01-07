import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext provides light/dark mode state and a toggle function.
 * The user's preference is persisted to localStorage and the appropriate
 * Tailwind CSS dark class is added to the document root. By default
 * the theme falls back to light mode if no preference has been stored.
 */
export type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialise theme from localStorage or default to light
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    }
    return 'light';
  });

  // Apply the theme class to the document root whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to access the current theme and toggle function.
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}