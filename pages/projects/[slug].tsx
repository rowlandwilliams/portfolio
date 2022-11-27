import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { client } from "../../client";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectTemplate } from "../../components/ProjectTemplate/ProjectTemplate";
import {
  ProjectDocument,
  ProjectFieldsFragment,
} from "../../graphql/generated";

interface Props {
  project: ProjectFieldsFragment;
}

const Project = ({ project }: Props) => <ProjectTemplate project={project} />;

Project.getLayout = (page: ReactElement) => (
  <BaseLayout padTop={!page.props.isClient}>{page}</BaseLayout>
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
      props: {
        project: data?.Project,
        isClient: data?.Project?.category?.name === "Client",
      },
    };
  }

  return { props: { project: {} } };
};

export default Project;
