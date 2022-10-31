import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import { Project } from "../types/projects";
import { querySanityCms } from "../utils/querySanityCms";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => (
  <div>
    <div className="relative w-full h-[600px] bg-red-50">
      <Image
        src={project.mainImage.asset.url}
        fill
        alt={project.name}
        className="object-cover opacity-90"
      />
      <section className="absolute bottom-8 px-4 md:px-16">
        <h1 className="text-4xl italic text-gray-200">{project?.name}</h1>
      </section>
    </div>
    <section className="px-4 md:px-16 py-8">
      <h1 className="text-6xl text-white">{project?.summary}</h1>
    </section>
  </div>
);

const getQuery = (id: string) => `query {
  Project(id: "${id}") {
      name
      summary
      mainImage {
        asset {
          url
        }
      }  
    }
}`;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query;

  const projectQuery = getQuery(id as string);

  const { Project } = await querySanityCms(projectQuery);

  return {
    props: { project: Project },
  };
};

export default Project;
