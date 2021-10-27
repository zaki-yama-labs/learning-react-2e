import { useEffect } from "react";

import { useIterator } from "./hooks";
import { RepositoryReadme } from "./RepositoryReadme";

type Props = {
  repositories: Repository[];
  login: string;
  onSelect: (name: string) => void;
};

type Repository = {
  name: string;
};

export const RepoMenu = ({
  repositories,
  login,
  onSelect = (f) => f,
}: Props) => {
  const [{ name }, previous, next] = useIterator<Repository>(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
};
