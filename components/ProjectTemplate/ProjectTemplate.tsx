import { ProjectFieldsFragment } from "../../graphql/generated";
import { ProjectUiComponents } from "../ProjectUiComponents/ProjectUiComponents";
import { ProjectTemplateImages } from "./ProjectTemplateImages/ProjectTemplateImages";
import { ProjectTemplateMainImageAndTitle } from "./ProjectTemplateMainImageAndTitle/ProjectTemplateMainImageAndTitle";
import { ProjectTemplateOverview } from "./ProjectTemplateOverview/ProjectTemplateOverview";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplate = ({ project }: Props) => {
  const { name, mainImage, category } = project;

  const isClient = category?.name === "Client";
  return (
    <div className="text-base space-y-8">
      {isClient ? (
        <ProjectTemplateMainImageAndTitle mainImage={mainImage} name={name} />
      ) : (
        <ProjectUiComponents name={name} />
      )}
      {isClient && <ProjectTemplateOverview project={project} />}
      {isClient && <ProjectTemplateImages project={project} />}
      {!isClient && <ProjectTemplateOverview project={project} />}
    </div>
  );
};
