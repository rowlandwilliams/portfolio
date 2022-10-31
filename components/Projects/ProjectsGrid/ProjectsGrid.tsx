import Link from "next/link";
import { Project } from "../../../types/projects";

interface Props {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map(({ _id, slug, name }) => (
        <Link
          href={{ pathname: `/${slug?.current}`, query: { id: _id } }}
          key={name}
          className="border border-gray-600 rounded-sm p-4 hover:border-indigo-400"
        >
          <h1 className="text-sm">{name}</h1>
        </Link>
      ))}
    </div>
  );
};
