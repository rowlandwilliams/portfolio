import { AllProjectsQuery } from "../../../../graphql/generated";
import { ProjectsGridThumbnail } from "./ProjectsGridThumbnail/ProjectsGridThumbnail";

interface Props {
  data: AllProjectsQuery;
}

export const ProjectsGridThumbnails = ({ data }: Props) => {
  return (
    <>
      {data.allProject.map((project) => (
        <ProjectsGridThumbnail project={project} key={project._id} />
      ))}
    </>
  );
};
