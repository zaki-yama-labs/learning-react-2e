import { memo, useState } from "react";

type CatProps = {
  name: string;
  meow: (name: string) => void;
};

const Cat = ({ name, meow = (f) => f }: CatProps) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);
const RenderCatOnce = memo(Cat, () => true); // 初回のみ描画される
const AlwaysRenderCat = memo(Cat, () => false); // 必ず毎回描画される

export const App = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          // eslint-disable-next-line no-shadow
          meow={(name) => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat") || ""])}>
        Add a Cat
      </button>
    </>
  );
};
