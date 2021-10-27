import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  repo: string;
  login: string;
};

export const RepositoryReadme = ({ repo, login }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  // eslint-disable-next-line no-shadow
  const loadReadme = useCallback(async (login: string, repo: string) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then((res) => res.json());
    const _markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(_markdown);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loading...</p>;
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};
