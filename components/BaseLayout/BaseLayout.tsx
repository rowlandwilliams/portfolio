import classNames from "classnames";
import { ReactNode } from "react";
import { NavBar } from "./NavBar/NavBar";
import { NavBarPadder } from "./NavBarPadder/NavBarPadder";

interface Props {
  children: ReactNode;
  padTop?: boolean;
}

export const BaseLayout = ({ children, padTop = false }: Props) => {
  return (
    <>
      <NavBar />
      <article className="min-h-screen flex flex-col">
        {padTop && <NavBarPadder />}
        <section
          className={classNames("flex flex-col flex-grow", {
            "py-4 md:pb-8": padTop,
          })}
        >
          {children}
        </section>
      </article>
    </>
  );
};
