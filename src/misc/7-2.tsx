/** useLayoutEffect */

import { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
}

export const App = () => {
  const [width, height] = useWindowSize();

  return (
    <div
      style={{
        width: `${width - 100}px`,
        height: `${height - 100}px`,
        border: "1px solid",
      }}
    >
      Hello
    </div>
  );
};
