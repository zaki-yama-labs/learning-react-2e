import { Fetch } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

type Props = {
  login: string;
  onSelect: (name: string) => void;
};

export const UserRepositories = ({ login, onSelect = (f) => f }: Props) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }: { data: any[] }) => (
        <RepoMenu repositories={data} login={login} onSelect={onSelect} />
      )}
    />
  );
};
