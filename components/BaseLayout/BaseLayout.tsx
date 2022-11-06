import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  noPadding?: boolean;
}

export const BaseLayout = ({ children, noPadding = false }: Props) => {
  return (
    <>
      <article className="flex justify-between items-center px-4 md:px-16 fixed z-50 w-full">
        <Link href="/" className="font-medium py-4 text-base">
          Rowland Williams
        </Link>
        <nav className="flex gap-x-8">
          <Link href="/projects?view=grid">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </article>
      <article
        className={classNames("h-screen py-16", {
          "px-4 md:px-16 ": !noPadding,
        })}
      >
        {children}
      </article>
    </>
  );
};
