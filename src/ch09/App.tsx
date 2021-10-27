import React, { useState } from "react";

import { Agreement } from "./Agreement";
// import { Main } from "./Main";

const Main = React.lazy(() => import("./Main"));

export const App = () => {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }

  return <Main />;
};
