import classNames from "classnames";
import { projectColors } from "../../../../tailwind/safeList";
import { getArrayFromOneToNOptions } from "../../../utils/utils";

const nProjects = projectColors.length;
const nSkeletons = getArrayFromOneToNOptions(nProjects);

export const ProjectsGridLoadingSkeletons = () => {
  return (
    <>
      {nSkeletons.map((skeleton, i) => (
        <div
          key={skeleton}
          className={classNames(
            "rounded-lg animate-pulse h-[300px] bg-opacity-60",
            [`bg-${projectColors[i]}`]
          )}
        />
      ))}
    </>
  );
};
