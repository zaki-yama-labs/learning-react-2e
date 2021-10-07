import { FormEventHandler } from "react";

import { useInput } from "./hooks";

type Props = {
  onNewColor: (title: string, color: string) => void;
};
const AddColorForm = ({ onNewColor = (f) => f }: Props) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
