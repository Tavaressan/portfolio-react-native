import React, { createContext, useState, useContext } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

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
