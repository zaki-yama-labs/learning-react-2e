import { useFetch } from "./hooks";

type Props<T> = {
  uri: string;
  renderSuccess: ({ data }: { data: T }) => JSX.Element;
  loadingFallback?: JSX.Element;
  renderError?: (error: Error) => JSX.Element;
};

export const Fetch = <T,>({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: Error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: Props<T>) => {
  const { loading, data, error } = useFetch<T>(uri);

  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess({ data });

  // NOTE: これがないと呼び出し側で
  // Type 'undefined' is not assignable to type 'Element | null'.ts(2786)
  // エラーが出るので追加したが、正しい方法かは不明
  return <></>;
};
