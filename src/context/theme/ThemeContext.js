import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export let colors = {};
export const ThemeProvider = ({
  children,
  initialColor = 'light',
  primaryColors,
}) => {
  const [color, setColor] = useState(initialColor);
  const toggleTheme = useCallback(() => {
    setColor(prevColor => (prevColor === 'light' ? 'dark' : 'light'));
  }, []);
  colors = {...primaryColors[color]};
  return (
    <ThemeContext.Provider value={{color, toggleTheme, primaryColors, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};
