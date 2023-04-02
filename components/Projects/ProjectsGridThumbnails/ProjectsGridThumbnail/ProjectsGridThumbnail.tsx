import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AllProjectFieldsFragment } from "../../../../graphql/generated";

interface Props {
  project: AllProjectFieldsFragment;
  isSmall?: boolean;
}

export const ProjectsGridThumbnail = ({ project, isSmall = false }: Props) => {
  const { _id, slug, color, mainImage, name } = project;

  return (
    <Link
      href={{
        pathname: `/code/${slug?.current}/${_id}`,
      }}
      className={classNames(
        "border relative border-transparent rounded-md overflow-hidden p-4",
        [`hover:border-${color}`],
        {
          "min-h-[200px]": isSmall,
          "min-h-[300px]": !isSmall,
        }
      )}
    >
      {mainImage?.asset?.url && name && (
        <Image
          src={mainImage?.asset.url}
          fill
          alt={name}
          className="object-cover"
          priority
        />
      )}
      <h1 className="text-base font-medium z-50 absolute bottom-4">{name}</h1>
    </Link>
  );
};
