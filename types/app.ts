import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export interface ProjectPageParams extends ParsedUrlQuery {
  id: string;
}
