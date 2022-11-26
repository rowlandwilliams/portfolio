import { ReactElement } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectsGrid } from "../../components/Projects/ProjectsGrid/ProjectsGrid";
import { UiSectionWithMargin } from "../../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const ProjectsPage = () => {
  return (
    <UiSectionWithMargin className="flex-grow animate-fade-in-down">
      <ProjectsGrid />
    </UiSectionWithMargin>
  );
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <BaseLayout padTop>{page}</BaseLayout>
);

export default ProjectsPage;
