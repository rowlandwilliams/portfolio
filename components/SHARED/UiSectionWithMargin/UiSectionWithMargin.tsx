import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  yPadding?: boolean;
}

export const UiSectionWithMargin = ({
  children,
  className = undefined,
  yPadding = false,
}: Props) => {
  return (
    <section
      className={classNames("mx-4 md:mx-16", [className], {
        "py-8": yPadding,
      })}
    >
      {children}
    </section>
  );
};
