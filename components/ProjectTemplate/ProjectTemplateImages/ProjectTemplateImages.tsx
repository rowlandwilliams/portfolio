import classNames from "classnames";
import Image from "next/image";
import { ProjectFieldsFragment } from "../../../graphql/generated";
import { SectionWithDisabledHorizontalScroll } from "../SHARED/SectionWithDisabledHorizontalScroll/SectionWithDisabledHorizontalScroll";
import { ProjectTemplateImageWithCaption } from "./ProjectTemplateImageWithCaption/ProjectTemplateImageWithCaption";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplateImages = ({ project }: Props) => {
  const { color, name, mainImage, projectImages } = project;
  return (
    <section
      className={classNames("h-screen py-8 flex items-center", [`bg-${color}`])}
    >
      <SectionWithDisabledHorizontalScroll className="flex flex-grow gap-x-4">
        {mainImage?.asset?.url && (
          <Image
            key={mainImage.asset.url}
            src={mainImage.asset.url}
            alt=""
            width={800}
            height={500}
            className="rounded-lg ml-16"
          />
        )}
        {projectImages &&
          projectImages?.map((project, i) =>
            project?.image ? (
              <ProjectTemplateImageWithCaption
                image={project?.image}
                caption={project.caption}
                name={name}
                key={project?.image?.asset?.url}
              />
            ) : null
          )}
      </SectionWithDisabledHorizontalScroll>
    </section>
  );
};
