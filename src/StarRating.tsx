import { CSSProperties } from "react";

import { Star } from "./Star";

type Props = {
  totalStars?: number;
  selectedStars?: number;
  onRate?: (rating: number) => void;
  style?: CSSProperties;
};

const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
  style,
}: Props) => {
  return (
    <div style={{ padding: "5px", ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
