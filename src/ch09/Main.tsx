import { ReactNode } from "react";

import { ErrorBoundary } from "./ErrorBoundary";
import { SiteLayout } from "./SiteLayout";

type CalloutProps = {
  children: ReactNode;
};

const Callout = ({ children }: CalloutProps) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: "white" }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

export const Main = () => {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Welcome to the site</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
};

// NOTE: React.lazy と import() でロードするためには default export する必要がある
// ref. https://reactjs.org/docs/code-splitting.html#reactlazy
export default Main;
