import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { client } from "../../../client";
import { BaseLayout } from "../../../components/BaseLayout/BaseLayout";
import { DesignProjectTemplate } from "../../../components/DesignProjectTemplate/DesignProjectTemplate";
import { UiSectionWithMargin } from "../../../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";
import {
  AllDesignProjectsDocument,
  AllDesignProjectsQuery,
  DesignProjectDocument,
  DesignProjectFieldsFragment,
} from "../../../graphql/generated";
import { ProjectPageParams } from "../../../types/app";

interface Props {
  designProject: DesignProjectFieldsFragment;
}

const DesignProject = ({ designProject }: Props) => (
  <UiSectionWithMargin className="flex-grow animate-fade-in-down">
    <DesignProjectTemplate designProject={designProject} />
  </UiSectionWithMargin>
);

DesignProject.getLayout = (page: ReactElement) => (
  <BaseLayout padTop>{page}</BaseLayout>
);

export async function getStaticPaths() {
  const { data } = await client
    .query<AllDesignProjectsQuery>(AllDesignProjectsDocument, {})
    .toPromise();
  const paths = data?.allDesignProject.map((project) => ({
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
    .query(DesignProjectDocument, { designProjectId: id })
    .toPromise();

  return {
    props: {
      designProject: data?.DesignProject,
    },
  };
};

export default DesignProject;
