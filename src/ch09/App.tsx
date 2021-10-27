import { ReactNode } from "react";

import { BreakThings } from "./BreakThings";
import { ErrorBoundary } from "./ErrorBoundary";
import { SiteLayout } from "./SiteLayout";

type CalloutProps = {
  children: ReactNode;
};

const Callout = ({ children }: CalloutProps) => (
  <div className="callout">{children}</div>
);

export const App = () => {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary>
          <p>Menu</p>
          <BreakThings />
        </ErrorBoundary>
      }
    >
      <ErrorBoundary>
        <Callout>
          Callout
          <BreakThings />
        </Callout>
      </ErrorBoundary>
      <ErrorBoundary>
        <h1>Contents</h1>
        <p>this is the main part of the example layout</p>
      </ErrorBoundary>
    </SiteLayout>
  );
};
