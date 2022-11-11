import { useQuery } from "urql";
import { AllProjectsDocument } from "../../../graphql/generated";
import { ProjectsGridLoadingSkeletons } from "./ProjectsGridLoadingSkeletons/ProjectsGridLoadingSkeletons";
import { ProjectsGridThumbnails } from "./ProjectsGridThumbnails/ProjectsGridThumbnails";

export const ProjectsGrid = () => {
  const [result] = useQuery({ query: AllProjectsDocument });

  const { data, fetching, error } = result;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {fetching && <ProjectsGridLoadingSkeletons />}
      {error && <div>{error && error.message}</div>}
      {data && <ProjectsGridThumbnails data={data} />}
    </div>
  );
};
