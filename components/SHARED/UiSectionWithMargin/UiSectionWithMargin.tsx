import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  yPadding?: boolean;
  padTop?: boolean;
}

export const UiSectionWithMargin = ({
  children,
  className = undefined,
  yPadding = false,
  padTop = false,
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
