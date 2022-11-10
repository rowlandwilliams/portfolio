import classNames from "classnames";
import { ProjectFieldsFragment } from "../../../graphql/generated";
import { ProjectTemplateMainImageAndTitle } from "./ProjectTemplateMainImageAndTitle/ProjectTemplateMainImageAndTitle";
import { ProjectTemplateOverview } from "./ProjectTemplateOverview/ProjectTemplateOverview";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplate = ({ project }: Props) => {
  const { name, mainImage } = project;

  return (
    <div className="text-base space-y-8 mb-32">
      <ProjectTemplateMainImageAndTitle mainImage={mainImage} name={name} />
      <ProjectTemplateOverview project={project} />
      <section
        className={classNames("h-screen ", [`bg-${project.color}`])}
      ></section>
      <section className="h-screen"></section>
    </div>
  );
};
