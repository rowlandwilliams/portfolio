import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { client } from "../../client";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectTemplate } from "../../components/Projects/ProjectTemplate/ProjectTemplate";
import {
  ProjectDocument,
  ProjectFieldsFragment,
} from "../../graphql/generated";

interface Props {
  project: ProjectFieldsFragment;
}

const Project = ({ project }: Props) => <ProjectTemplate project={project} />;

Project.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query;

  if (id && typeof id === "string") {
    const { data } = await client
      .query(ProjectDocument, { projectId: id })
      .toPromise();

    return {
      props: { project: data?.Project },
    };
  }

  return { props: { project: {} } };
};

export default Project;
