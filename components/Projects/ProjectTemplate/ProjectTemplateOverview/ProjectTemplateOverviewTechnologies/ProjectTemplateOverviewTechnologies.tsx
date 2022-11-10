import { ProjectTemplateOverviewTags } from "../SHARED/ProjectTemplateOverviewTags/ProjectTemplateOverviewTags";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  technologies: (string | null)[] | null | undefined;
  borderColorClass: string;
}

export const ProjectTemplateOverviewTechnologies = ({
  technologies,
  borderColorClass,
}: Props) => {
  return technologies ? (
    <ProjectTemplateOverviewTitleAndChildSection title="Technologies">
      <ProjectTemplateOverviewTags
        options={technologies}
        borderColorClass={borderColorClass}
      />
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
