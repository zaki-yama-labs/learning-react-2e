import { FormEventHandler, MouseEventHandler, useRef, useState } from "react";

type Props = {
  onNewColor: (title: string, color: string) => void;
};
const AddColorForm = ({ onNewColor = (f) => f }: Props) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
