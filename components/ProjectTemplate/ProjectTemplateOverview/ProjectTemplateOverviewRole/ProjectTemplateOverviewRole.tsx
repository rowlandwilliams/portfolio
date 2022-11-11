import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  jobTitle: string | null | undefined;
}

export const ProjectTemplateOverviewRole = ({ jobTitle }: Props) => {
  return jobTitle ? (
    <ProjectTemplateOverviewTitleAndChildSection title="Role">
      {jobTitle}
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
