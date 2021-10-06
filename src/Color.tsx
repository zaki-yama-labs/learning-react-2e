import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";

export type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove?: (id: string) => void;
  onRate?: (id: string, rating: number) => void;
};

const Color = ({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(r) => onRate(id, r)} />
    </section>
  );
};

export default Color;
