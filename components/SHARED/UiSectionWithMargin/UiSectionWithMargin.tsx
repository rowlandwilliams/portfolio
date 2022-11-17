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
      className={classNames("mx-4 md:mx-16 flex flex-col", [className], {
        "": yPadding,
      })}
    >
      <div className="w-full h-16"></div>
      {children}
    </section>
  );
};
