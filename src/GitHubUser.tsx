import { Fetch } from "./Fetch";
import { UserRepositories } from "./UserRepositories";

type Data = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

type Props = {
  data: Data;
};

const UserDetails = ({ data }: Props) => {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
};

export const GitHubUser = ({ login }: { login: string }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};
