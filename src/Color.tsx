import { FaTrash } from "react-icons/fa";

import { useColors } from "./ColorProvider";
import StarRating from "./StarRating";

export type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

const Color = ({ id, title, color, rating }: Props) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(r) => rateColor(id, r)} />
    </section>
  );
};

export default Color;
