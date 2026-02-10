import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-sidebar dark:bg-sidebar border border-border dark:border-border hover:border-primary transition-all duration-300 text-muted hover:text-primary"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="transition-transform duration-300 hover:rotate-45" />
            ) : (
                <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
            )}
        </button>
    );
};

export default ThemeToggle;
