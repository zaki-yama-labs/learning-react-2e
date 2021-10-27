import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

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

export const useFetch = <Data>(uri: string) => {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uri) return;
    setLoading(true);
    fetch(uri)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};

export const useIterator = <Item>(items: Item[] = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) setIndex(0);
    setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next] as const;
};
