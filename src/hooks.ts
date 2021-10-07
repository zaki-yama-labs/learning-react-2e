import { ChangeEvent, ChangeEventHandler, useState } from "react";

type ReturnType = [
  { value: string; onChange: ChangeEventHandler<HTMLInputElement> },
  () => void
];

export const useInput: (initialValue: string) => ReturnType = (
  initialValue: string
) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};
