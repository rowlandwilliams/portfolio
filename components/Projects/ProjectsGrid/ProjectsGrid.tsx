import Link from "next/link";
import { gql, useQuery } from "urql";
import { Project } from "../../../types/projects";
import { getArrayFromOneToNOptions } from "../../utils/utils";

const query = gql`
  query {
    allProject(sort: { complete: ASC, endDate: DESC }) {
      _id
      name
      color
      technologies
      complete
      startDate
      endDate
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`;

const nSkeltons = getArrayFromOneToNOptions(3);

export const ProjectsGrid = () => {
  const [result] = useQuery({ query });

  const { data, fetching, error } = result;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {fetching &&
        nSkeltons.map((skeleton) => (
          <div
            key={skeleton}
            className="border border-gray-600 rounded-sm p-4 animate-pulse h-20"
          />
        ))}
      {error && <div>{error && error.message}</div>}
      {data &&
        data.allProject.map(({ _id, slug, name }: Project) => (
          <Link
            href={{
              pathname: `/projects/${slug?.current}`,
              query: { id: _id },
            }}
            key={name}
            className="border border-gray-600 rounded-sm p-4 hover:border-indigo-400"
          >
            <h1 className="text-sm">{name}</h1>
          </Link>
        ))}
    </div>
  );
};
