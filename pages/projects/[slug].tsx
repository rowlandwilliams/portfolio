import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectTemplate } from "../../components/Projects/ProjectTemplate/ProjectTemplate";
import { Project } from "../../types/projects";
import { querySanityCms } from "../../utils/querySanityCms";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => <ProjectTemplate project={project} />;

Project.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

const getQuery = (id: string) => `query {
  Project(id: "${id}") {
      name
      summary
      color
      mainImage {
        asset {
          url
        }
      } 
      overviewRaw
      problemRaw
      solutionRaw
    }
}`;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query;

  const projectQuery = getQuery(id as string);

  const data = await querySanityCms(projectQuery);

  return {
    props: { project: data.Project },
  };
};

export default Project;
