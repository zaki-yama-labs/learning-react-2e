import { useFetch } from "./hooks";

type Data = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

export const GitHubUser = ({ login }: { login: string }) => {
  const { loading, data, error } = useFetch<Data>(
    `https:/api.github.com/users/${login}`
  );
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>loading...</h1>;
  if (!data) return null;

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
