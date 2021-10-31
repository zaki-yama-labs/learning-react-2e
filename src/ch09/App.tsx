import React, { Suspense, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import { Agreement } from "./Agreement";
import { ErrorBoundary, ErrorScreen } from "./ErrorBoundary";
// import { Main } from "./Main";

const Main = React.lazy(() => import("./Main"));

export const App = () => {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }

  return (
    <ErrorBoundary fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
};
