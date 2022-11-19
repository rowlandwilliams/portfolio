import classNames from "classnames";
import { ReactNode } from "react";
import { NavBar } from "./NavBar/NavBar";

interface Props {
  children: ReactNode;
  noPadding?: boolean;
}

export const BaseLayout = ({ children, noPadding = false }: Props) => {
  return (
    <>
      <NavBar />
      <article
        className={classNames("", {
          "px-4 md:px-16 py-16": !noPadding,
        })}
      >
        {children}
      </article>
    </>
  );
};
