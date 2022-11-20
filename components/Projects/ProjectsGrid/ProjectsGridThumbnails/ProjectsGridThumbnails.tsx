import { AllProjectsQuery } from "../../../../graphql/generated";
import { ProjectsGridThumbnail } from "./ProjectsGridThumbnail/ProjectsGridThumbnail";

interface Props {
  data: AllProjectsQuery;
}

export const ProjectsGridThumbnails = ({ data }: Props) => {
  const { allProject } = data;

  const clientProjects = allProject.filter(
    (project) => project.category?.name === "Client"
  );

  const nonClientProjects = allProject.filter(
    (project) => project.category?.name !== "Client"
  );

  return (
    <>
      {clientProjects.map((project) => (
        <ProjectsGridThumbnail project={project} key={project._id} />
      ))}

      {nonClientProjects.map((project) => (
        <ProjectsGridThumbnail project={project} key={project._id} />
      ))}
    </>
  );
};
