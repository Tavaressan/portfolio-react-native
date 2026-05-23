import React, { createContext, useState, useContext } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // Default: 16

  // Scale any standard size proportionally relative to the baseline (16px)
  const getScaledFontSize = (standardSize) => {
    const scaleFactor = fontSize / 16;
    return Math.round(standardSize * scaleFactor);
  };

  return (
    <FontContext.Provider value={{ fontSize, setFontSize, getScaledFontSize }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
export default FontContext;
