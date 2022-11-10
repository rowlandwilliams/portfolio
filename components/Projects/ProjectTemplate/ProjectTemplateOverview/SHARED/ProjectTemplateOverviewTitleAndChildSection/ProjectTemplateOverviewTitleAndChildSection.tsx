import { ReactNode } from "react";

interface Props {
  title: string;
  children: string | ReactNode;
}

export const ProjectTemplateOverviewTitleAndChildSection = ({
  title,
  children,
}: Props) => {
  const childIsString = typeof children === "string";
  return (
    <section className="space-y-2">
      <h1 className="font-medium">{title}</h1>
      {childIsString ? <div>{children}</div> : children}
    </section>
  );
};
