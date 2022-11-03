import Image from "next/image";
import { Project } from "../../../types/projects";
import { ProjectTemplateHeaderIconWithTooltip } from "./ProjectTemplateHeaderIconWithTooltip/ProjectTemplateHeaderIconWithTooltip";

interface Props {
  project: Project;
}

export const ProjectTemplate = ({ project }: Props) => {
  return (
    <div>
      <div className="relative w-full h-[600px] bg-red-50">
        <Image
          src={project.mainImage.asset.url}
          fill
          alt={project.name}
          className="object-cover opacity-90"
        />
        <section className="absolute bottom-8 px-4 md:px-16">
          <h1 className="text-4xl italic text-gray-200">{project?.name}</h1>
        </section>
      </div>
      <section className="mx-4 md:mx-16  ">
        <h1 className="text-6xl text-white border-b border-gray-600 py-8">
          {project?.summary}
        </h1>
        <ProjectTemplateHeaderIconWithTooltip projectName={project.name} />
        <div className="py-12">
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
          <div>suuuuu</div>
        </div>
      </section>
    </div>
  );
};
