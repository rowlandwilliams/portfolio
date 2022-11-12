import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionWithDisabledHorizontalScroll = ({
  children,
  className = undefined,
}: Props) => {
  return (
    <section
      className={classNames("overflow-x-scroll", [className])}
      id="hide-scroll"
    >
      {children}
    </section>
  );
};
