import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AllProjectFieldsFragment } from "../../../../graphql/generated";

interface Props {
  project: AllProjectFieldsFragment;
}

export const ProjectsGridLargerWorksThumbnail = ({ project }: Props) => {
  const {
    _id,
    slug,
    color,
    mainImage,
    name,
    companyLogo,
    summary,
    deliverables,
  } = project;

  return (
    <Link
      href={{
        pathname: `/projects/${slug?.current}/${_id}`,
      }}
      className={classNames(
        "border rounded-md border-gray-700 overflow-hidden",
        [`hover:border-${color}`]
      )}
    >
      <div className="relative min-h-[300px]">
        {mainImage?.asset?.url && name && (
          <Image
            src={mainImage?.asset.url}
            fill
            alt={name}
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="p-4 text-xs space-y-2">
        {companyLogo?.asset?.url && name && (
          <div className="relative h-[20px] w-[70px]">
            <Image
              src={companyLogo?.asset?.url}
              fill
              alt={name}
              className="object-contain"
              priority
            />
          </div>
        )}
        <p className="text-gray-200">{summary}</p>
      </div>
    </Link>
  );
};
