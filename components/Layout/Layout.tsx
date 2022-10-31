import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1>Rowland</h1>
      {children}
    </div>
  );
};
