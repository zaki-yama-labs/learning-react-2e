import { useEffect, useState } from "react";

const loadJSON = (key: string) => {
  return key && JSON.parse(localStorage.getItem(key) || "null");
};

const saveJSON = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const GitHubUser = ({ login }: { login: string }) => {
  const [data, setData] = useState<Record<string, unknown>>(
    loadJSON(`user:${login}`)
  );

  useEffect(() => {
    console.log("save data");
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data, login]);

  useEffect(() => {
    console.log("fetch data");
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
