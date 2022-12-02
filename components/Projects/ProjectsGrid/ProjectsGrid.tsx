import { useQuery } from "urql";
import { AllProjectsDocument } from "../../../graphql/generated";
import { ProjectsGridLoadingSkeletons } from "./ProjectsGridLoadingSkeletons/ProjectsGridLoadingSkeletons";
import { ProjectsGridThumbnails } from "./ProjectsGridThumbnails/ProjectsGridThumbnails";

export const ProjectsGrid = () => {
  const [result] = useQuery({ query: AllProjectsDocument });

  const { data, fetching, error } = result;

  return (
    <div >
      {fetching && <ProjectsGridLoadingSkeletons />}
      {error && <div>{error && error.message}</div>}
      {data &&<ProjectsGridLoadingSkeletons /> }
    </div>
  );
};
