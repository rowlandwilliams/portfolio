import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const UiSectionWithMargin = ({
  children,
  className = undefined,
}: Props) => {
  return (
    <section className={classNames("mx-4 md:mx-20 flex flex-col", [className])}>
      {children}
    </section>
  );
};
