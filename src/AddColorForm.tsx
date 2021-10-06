import { FormEventHandler, MouseEventHandler, useRef } from "react";

type Props = {
  onNewColor: (title: string, color: string) => void;
};
const AddColorForm = ({ onNewColor = (f) => f }: Props) => {
  const txtTitle = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    const title = txtTitle.current!.value;
    const color = hexColor.current!.value;
    onNewColor(title, color);
    txtTitle.current!.value = "";
    hexColor.current!.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
