import { ReactElement } from "react";
import { ProjectsGrid } from "../../components/Projects/ProjectsGrid/ProjectsGrid";
import { ProjectsLayout } from "../../components/ProjectsLayout/ProjectsLayout";

const ProjectsPage = () => {
  return <ProjectsGrid />;
};

ProjectsPage.getLayout = (page: ReactElement) => <ProjectsLayout />;

export default ProjectsPage;
