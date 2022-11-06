import { PortableText, PortableTextComponents } from "@portabletext/react";
import classNames from "classnames";
import Image from "next/image";
import { Project } from "../../../types/projects";
import { ProjectTemplateHeaderIconWithTooltip } from "./ProjectTemplateHeaderIconWithTooltip/ProjectTemplateHeaderIconWithTooltip";

interface Props {
  project: Project;
}
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-medium">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-medium">{children}</h2>,
    normal: ({ children }) => <p className=" my-2">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 underline "
      >
        {children}
      </a>
    ),
  },
  types: {},
};

export const ProjectTemplate = ({ project }: Props) => {
  return (
    <div className="text-base space-y-8 mb-32">
      <div className="relative w-full h-[600px]">
        <Image
          src={project.mainImage.asset.url}
          fill
          alt={project.name}
          className="object-cover"
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

        <div>
          <h1 className="text-indigo-400 text-lg">Overview</h1>
          <PortableText value={project.overviewRaw} components={components} />
        </div>
      </section>
      <section
        className={classNames("h-screen ", [`bg-${project.color}`])}
      ></section>
      <section className="space-y-8 text-base mx-4 md:mx-16">
        <div>
          <h1 className="text-indigo-400 text-lg">Problem</h1>
          <PortableText value={project.problemRaw} components={components} />
        </div>
        <div>
          <h1 className="text-indigo-400 text-lg">Solution</h1>
          <PortableText value={project.solutionRaw} components={components} />
        </div>
      </section>
    </div>
  );
};