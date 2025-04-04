'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button onClick={toggleTheme} className="flex items-center justify-center cursor-pointer">
            <motion.span
                key={theme}
                initial={{ rotate: -180, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.3 }}
                className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-yellow-500'}`}
            >
                {theme === 'dark' ? '🌙' : '☀️'}
            </motion.span>
        </button>
    );
};

export default ThemeToggle;