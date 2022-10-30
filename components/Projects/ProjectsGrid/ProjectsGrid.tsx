import { Project } from "../../../types/projects";

interface Props {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="border border-gray-600 rounded-sm p-4"
        >
          <h1 className="text-sm">{project.name}</h1>
        </div>
      ))}
    </div>
  );
};
