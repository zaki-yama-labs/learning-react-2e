import { Suspense } from "react";
import { GridLoader } from "react-spinners";

import { ErrorBoundary } from "../ch09/ErrorBoundary";

const loadStatus = () => {
  throw new Promise((resolves) => null);
};

const Status = () => {
  const status = loadStatus();
  return <h1>status:{status}</h1>;
};

export const App = () => {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
};
