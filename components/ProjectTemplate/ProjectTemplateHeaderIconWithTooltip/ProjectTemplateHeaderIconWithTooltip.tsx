import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  projectName: string;
}

export const ProjectTemplateHeaderIconWithTooltip = ({
  projectName,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-max"
    >
      <div
        className={classNames(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all rounded-full bg-indigo-600 opacity-40 z-0",
          {
            "visible opacity-100 w-10 h-10": hovered,
            "invisible opacity-0 w-0 h-0": !hovered,
          }
        )}
      ></div>
      <div className="z-50">
        <Image
          src="/project/clientUrl.svg"
          width={24}
          height={24}
          alt="client-url"
          className="z-50"
        />
      </div>

      <div
        className={classNames(
          "underline font-medium text-indigo-600 px-4 pointer-events-none py-1 capitalize top-full left-1/2 transform -translate-x-1/2 translate-y-2 transition-all duration-500 absolute",
          { "visible opacity-100": hovered, "invisible opacity-0": !hovered }
        )}
      >
        Explore {projectName}
      </div>
    </div>
  );
};
