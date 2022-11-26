import { ReactNode } from "react";
import { NavBar } from "./NavBar/NavBar";
import { NavBarPadder } from "./NavBarPadder/NavBarPadder";

interface Props {
  children: ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <article className="min-h-screen flex flex-col">
        <NavBarPadder />
        <section className="flex flex-col flex-grow py-4 md:pb-8">{children}</section>
      </article>
    </>
  );
};
