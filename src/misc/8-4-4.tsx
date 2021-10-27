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

type Data = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

const UserDetails = ({ data }: { data: Data }) => {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export const GitHubUser = ({ login }: { login: string }) => {
  return (
    <Fetch
      uri={`https:/api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};
