import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Defaulting to dark mode for a modern look

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const themeColors = {
    background: darkMode ? '#121212' : '#FFFFFF',
    text: darkMode ? '#FFFFFF' : '#111111',
    textSecondary: darkMode ? '#A0A0A0' : '#666666',
    cardBackground: darkMode ? '#1E1E1E' : '#F5F5F5',
    cardBorder: darkMode ? '#2E2E2E' : '#E0E0E0',
    primary: darkMode ? '#93C5FD' : '#2563EB', // Light Blue / Royal Blue
    accent: darkMode ? '#F472B6' : '#DB2777',  // Pink
    shadow: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)',
    divider: darkMode ? '#2E2E2E' : '#E0E0E0',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme: themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
