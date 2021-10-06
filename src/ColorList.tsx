import Color, { Props as ColorProps } from "./Color";

type Props = {
  colors: ColorProps[];
  onRemoveColor?: (id: string) => void;
  onRateColor?: (id: string, rating: number) => void;
};

const ColorList = ({
  colors,
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}: Props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
