import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  menu: ReactNode;
};

export const SiteLayout = ({ children, menu = () => null }: Props) => {
  return (
    <div className="site-container">
      <div className="menu">{menu}</div>
      <div className="content">{children}</div>
    </div>
  );
};
