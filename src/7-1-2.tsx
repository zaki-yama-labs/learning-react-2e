/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    // @ts-ignore
    window.addEventListener("keydown", forceRender);
    // @ts-ignore
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  const words = useMemo(() => {
    // eslint-disable-next-line no-shadow
    const words = children.split(" ");
    return words;
  }, [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};

export const App = () => {
  return <WordCount>You are not going to believe this but...</WordCount>;
};
