import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { client } from "../../client";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { DesignGrid } from "../../components/DesignGrid/DesignGrid";
import { UiSectionWithMargin } from "../../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";
import {
  AllDesignProjectFieldsFragment,
  DesignProjectsDocument,
  DesignProjectsQuery,
} from "../../graphql/generated";

interface Props {
  designProjects: AllDesignProjectFieldsFragment[] | undefined;
}

const DesignPage = ({ designProjects }: Props) => {
  return (
    <UiSectionWithMargin className="flex-grow animate-fade-in-down">
      {designProjects && <DesignGrid designProjects={designProjects} />}
    </UiSectionWithMargin>
  );
};

DesignPage.getLayout = (page: ReactElement) => (
  <BaseLayout padTop>{page}</BaseLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client
    .query<DesignProjectsQuery>(DesignProjectsDocument, {})
    .toPromise();

  return {
    props: {
      designProjects: data?.allDesignProject,
    },
  };
};

export default DesignPage;
