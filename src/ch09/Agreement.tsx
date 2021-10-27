import { MouseEventHandler } from "react";

type Props = {
  onAgree: MouseEventHandler<HTMLButtonElement>;
};

export const Agreement = ({ onAgree = (f) => f }: Props) => {
  return (
    <div>
      <p>Terms...</p>
      <p>These are the terms and stuff. Do you agree?</p>
      <button onClick={onAgree}>I agree</button>
    </div>
  );
};
