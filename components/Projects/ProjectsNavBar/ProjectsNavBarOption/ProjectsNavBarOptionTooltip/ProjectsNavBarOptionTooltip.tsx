import classNames from "classnames";

interface Props {
  hovered: boolean;
  navBarOption: string;
}

export const ProjectsNavBarOptionTooltip = ({
  hovered,
  navBarOption,
}: Props) => {
  return (
    <div
      className={classNames(
        "bg-gray-700 px-4 pointer-events-none py-1 capitalize top-full left-1/2 transform -translate-x-1/2 translate-y-2 transition-all duration-500 absolute",
        { "visible opacity-100": hovered, "invisible opacity-0": !hovered }
      )}
    >
      {navBarOption}
    </div>
  );
};
