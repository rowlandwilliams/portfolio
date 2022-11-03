import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectsNavBarOptionTooltip } from "./ProjectsNavBarOptionTooltip/ProjectsNavBarOptionTooltip";

interface Props {
  navBarOption: string;
  activeOption: string;
}

export const ProjectsNavBarOption = ({ navBarOption, activeOption }: Props) => {
  const [hovered, setHovered] = useState(false);
  const active = navBarOption === activeOption;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      href={{
        pathname: `/projects`,
        query: { view: navBarOption },
      }}
      className="relative"
    >
      <button
        type="button"
        className={classNames("border rounded-sm p-0.5", {
          "border-indigo-600": active,
          "border-gray-600": !active,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${navBarOption}.svg`}
          width={22}
          height={22}
          key={navBarOption}
          alt={navBarOption}
          className={classNames({ "opacity-50 hover:opacity-80": !active })}
        />
      </button>
      <ProjectsNavBarOptionTooltip
        navBarOption={navBarOption}
        hovered={hovered}
      />
    </Link>
  );
};
