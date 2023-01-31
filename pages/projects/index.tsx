import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { client } from "../../client";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectsGridThumbnails } from "../../components/Projects/ProjectsGridThumbnails/ProjectsGridThumbnails";
import { UiSectionWithMargin } from "../../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";
import {
  AllProjectFieldsFragment,
  AllProjectsDocument,
  AllProjectsQuery,
} from "../../graphql/generated";

interface Props {
  projects: AllProjectFieldsFragment[] | undefined;
}

const ProjectsPage = ({ projects }: Props) => {
  return (
    <UiSectionWithMargin className="flex-grow animate-fade-in-down">
      {projects && <ProjectsGridThumbnails projects={projects} />}
    </UiSectionWithMargin>
  );
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <BaseLayout padTop>{page}</BaseLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client
    .query<AllProjectsQuery>(AllProjectsDocument, {})
    .toPromise();

  return {
    props: {
      projects: data?.allProject,
    },
  };
};

export default ProjectsPage;
