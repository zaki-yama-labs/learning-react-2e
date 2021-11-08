import { MouseEventHandler } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  selected?: boolean;
  onSelect?: MouseEventHandler;
};

export const Star = ({ selected = false, onSelect = (f) => f }: Props) => {
  return (
    <FaStar id="star" color={selected ? "red" : "grey"} onClick={onSelect} />
  );
};
