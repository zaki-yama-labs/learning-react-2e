import { Suspense } from "react";
import { GridLoader } from "react-spinners";

import { ErrorBoundary } from "../ch09/ErrorBoundary";

const loadStatus = () => {
  console.log("load status");
  throw new Promise((resolves) => setTimeout(resolves, 3000));
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
