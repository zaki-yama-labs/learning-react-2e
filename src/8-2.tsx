import { useEffect, useState } from "react";

const GitHubUser = ({ login }: { login: string }) => {
  const [data, setData] = useState<Record<string, unknown>>();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
};

export const App = () => {
  return <GitHubUser login="moonhighway" />;
};
