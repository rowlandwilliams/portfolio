import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AllProjectFieldsFragment } from "../../../../graphql/generated";

interface Props {
  project: AllProjectFieldsFragment;
}

export const ProjectsGridThumbnail = ({ project }: Props) => {
  const { slug, _id, color, mainImage, name } = project;

  return (
    <Link
      href={{
        pathname: `/projects/${slug?.current}`,
        query: { id: _id },
      }}
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
      <h1 className="text-base font-medium z-50 absolute bottom-4">{name}</h1>
    </Link>
  );
};
