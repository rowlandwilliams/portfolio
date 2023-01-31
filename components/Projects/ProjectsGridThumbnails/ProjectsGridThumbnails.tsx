import { AllProjectFieldsFragment } from "../../../graphql/generated";
import { ProjectsGridLargerWorksThumbnail } from "./ProjectsGridLargerWorksThumbnail/ProjectsGridLargerWorksThumbnail";
import { ProjectsGridThumbnail } from "./ProjectsGridThumbnail/ProjectsGridThumbnail";

interface Props {
  projects: AllProjectFieldsFragment[];
}

export const ProjectsGridThumbnails = ({ projects }: Props) => {
  const clientProjects = projects.filter(
    (project) => project.category?.name === "Client"
  );

  const nonClientProjects = projects.filter(
    (project) => project.category?.name !== "Client"
  );

  return (
    <article className="space-y-8">
      <section className="space-y-4">
        <h1 className="font-medium text-xl border-b border-gray-700">
          Larger Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {clientProjects.map((project) => (
            <ProjectsGridLargerWorksThumbnail
              project={project}
              key={project._id}
            />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h1 className="font-medium text-lg border-b border-gray-700">
          Smaller Works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {nonClientProjects.map((project) => (
            <ProjectsGridThumbnail
              project={project}
              key={project._id}
              isSmall
            />
          ))}
        </div>
      </section>
    </article>
  );
};
