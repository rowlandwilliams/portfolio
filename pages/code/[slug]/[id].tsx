import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { client } from "../../../client";
import { BaseLayout } from "../../../components/BaseLayout/BaseLayout";
import { ProjectTemplate } from "../../../components/ProjectTemplate/ProjectTemplate";
import {
  AllProjectsDocument,
  AllProjectsQuery,
  ProjectDocument,
  ProjectFieldsFragment,
} from "../../../graphql/generated";
import { ProjectPageParams } from "../../../types/app";

interface Props {
  project: ProjectFieldsFragment;
}

const Project = ({ project }: Props) =>
  project ? <ProjectTemplate project={project} /> : null;

Project.getLayout = (page: ReactElement) => (
  <BaseLayout padTop={!page.props.isClient}>{page}</BaseLayout>
);

export async function getStaticPaths() {
  const { data } = await client
    .query<AllProjectsQuery>(AllProjectsDocument, {})
    .toPromise();
  const paths = data?.allProject.map((project) => ({
    params: { id: project._id, slug: project.slug?.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { id } = params as ProjectPageParams;

  const { data } = await client
    .query(ProjectDocument, { projectId: id })
    .toPromise();

  return {
    props: {
      project: data?.Project,
      isClient: data?.Project?.category?.name === "Client",
    },
  };
};

export default Project;
