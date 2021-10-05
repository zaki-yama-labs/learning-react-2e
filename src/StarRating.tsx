import { CSSProperties, MouseEventHandler, useState } from "react";
import { FaStar } from "react-icons/fa";

type StarProps = {
  selected?: boolean;
  onSelect: MouseEventHandler;
};

const Star = ({ selected = false, onSelect = (f) => f }: StarProps) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

type Props = {
  totalStars?: number;
  style?: CSSProperties;
};

const StarRating = ({ totalStars = 5, style }: Props) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ padding: "5px", ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
