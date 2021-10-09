import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

import colorData from "./color-data.json";
import { Props as ColorProps } from "./Color";

type ColorContextType = {
  colors: ColorProps[];
  addColor: (title: string, color: string) => void;
  rateColor: (title: string, rating: number) => void;
  removeColor: (id: string) => void;
};

const ColorContext = createContext<ColorContextType>({} as ColorContextType);
export const useColors = () => useContext(ColorContext);

const ColorProvider: React.FC = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id: string, rating: number) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const removeColor = (id: string) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
