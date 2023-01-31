import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import { client } from "../../client";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { ProjectTemplate } from "../../components/ProjectTemplate/ProjectTemplate";
import {
  AllProjectsDocument,
  AllProjectsQuery,
  ProjectDocument,
  ProjectFieldsFragment,
} from "../../graphql/generated";

interface Props {
  project: ProjectFieldsFragment;
}

const Project = ({ project }: Props) =>
  project ? <ProjectTemplate project={project} /> : null;

Project.getLayout = (page: ReactElement) => (
  <BaseLayout padTop={!page.props.isClient}>{page}</BaseLayout>
);

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const { data } = await client
    .query<AllProjectsQuery>(AllProjectsDocument, {})
    .toPromise();

  const paths = data?.allProject.map((project) => ({
    params: { id: project._id },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams; // no longer causes error
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
