import { Component, ReactNode } from "react";

type Props = {
  fallback?: ({ error }: { error: Error }) => ReactNode;
  children: ReactNode;
};

export class ErrorBoundary extends Component<Props> {
  // eslint-disable-next-line react/sort-comp
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      if (fallback) return fallback({ error });
      return <ErrorScreen error={error} />;
    }
    return children;
  }
}

const ErrorScreen = ({ error }: { error: Error }) => {
  return (
    <div className="error">
      <h3>We are sorry...something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
};
