import { Suspense } from "react";
import { GridLoader } from "react-spinners";

import { ErrorBoundary } from "../ch09/ErrorBoundary";

const createResource = <T extends unknown>(pending: Promise<T>) => {
  let error: Error, response: T;
  pending.then((r) => (response = r)).catch((e) => (error = e));

  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pending;
    },
  };
};

const threeSecondsToGnar: Promise<{ gnar: string }> = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);
const resource = createResource(threeSecondsToGnar);

const Gnar = () => {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
};

const loadStatus = (() => {
  let error: Error, response: unknown;
  const promise = new Promise((resolves) => setTimeout(resolves, 3000))
    .then(() => (response = "success"))
    .catch((e) => (error = e));

  console.log("load status");
  return () => {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

const Status = () => {
  const status = loadStatus();
  return <h1>status:{status}</h1>;
};

export const App = () => {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  );
};
