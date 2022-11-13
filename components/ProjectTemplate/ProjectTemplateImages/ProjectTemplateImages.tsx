import classNames from "classnames";
import { ProjectFieldsFragment } from "../../../graphql/generated";
import { SectionWithDisabledHorizontalScroll } from "../SHARED/SectionWithDisabledHorizontalScroll/SectionWithDisabledHorizontalScroll";
import { ProjectTemplateImageWithCaption } from "./ProjectTemplateImageWithCaption/ProjectTemplateImageWithCaption";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplateImages = ({ project }: Props) => {
  const { color, name, projectImages } = project;

  const nProjectImages = projectImages?.length;
  const firstImageIndex = 0;
  const lastImageIndex = nProjectImages ? nProjectImages - 1 : null;
  return (
    <section
      className={classNames("h-screen py-8 flex items-center", [`bg-${color}`])}
    >
      <SectionWithDisabledHorizontalScroll className="h-[700px] flex gap-x-4 py-8 overflow-y-hidden">
        {projectImages &&
          projectImages?.map((project, i) =>
            project?.image && nProjectImages ? (
              <ProjectTemplateImageWithCaption
                image={project?.image}
                caption={project.caption}
                name={name}
                key={project?.image?.asset?.url}
                isFirst={i === firstImageIndex}
                isLast={i === lastImageIndex}
              />
            ) : null
          )}
      </SectionWithDisabledHorizontalScroll>
    </section>
  );
};
