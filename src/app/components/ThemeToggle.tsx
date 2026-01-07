import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * A simple button that toggles between light and dark themes. It
 * displays a moon icon when in light mode and a sun icon when in
 * dark mode. The button uses Tailwind classes for styling and
 * includes a transition on hover and active states.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary text-foreground hover:text-primary-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}