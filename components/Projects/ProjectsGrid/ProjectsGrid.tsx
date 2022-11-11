import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "urql";
import { AllProjectsDocument } from "../../../graphql/generated";
import { getArrayFromOneToNOptions } from "../../utils/utils";

const nSkeltons = getArrayFromOneToNOptions(3);

export const ProjectsGrid = () => {
  const [result] = useQuery({ query: AllProjectsDocument });

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
        data.allProject.map(({ _id, slug, name, mainImage, color }) => (
          <Link
            href={{
              pathname: `/projects/${slug?.current}`,
              query: { id: _id },
            }}
            key={name}
            className={classNames(
              "border relative border-gray-600 rounded-lg overflow-hidden p-4 hover:border-2 min-h-[300px]",
              [`hover:border-${color}`]
            )}
          >
            {mainImage?.asset?.url && name && (
              <Image
                src={mainImage?.asset.url}
                fill
                alt={name}
                className="object-cover"
              />
            )}

            <h1 className="text-base font-medium z-50 absolute bottom-4">
              {name}
            </h1>
          </Link>
        ))}
    </div>
  );
};
