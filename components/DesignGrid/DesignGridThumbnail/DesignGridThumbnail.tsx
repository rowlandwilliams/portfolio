import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AllDesignProjectFieldsFragment } from "../../../graphql/generated";

interface Props {
  designProject: AllDesignProjectFieldsFragment;
}

export const DesignGridThumbnail = ({ designProject }: Props) => {
  const { _id, color, slug, name, summary, mainImage } = designProject;
  return (
    <Link
      href={{
        pathname: `/design/${slug?.current}/${_id}`,
      }}
      className={classNames(
        "border rounded-md border-gray-700 overflow-hidden",
        [`hover:border-${color}`]
      )}
    >
      <div className="relative min-h-[600px]">
        {mainImage?.asset?.url && name && (
          <Image
            src={mainImage?.asset.url}
            fill
            alt={name}
            className="object-cover"
          />
        )}
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-sm font-medium">{name}</h1>
        <h2 className="text-gray-400">{summary}</h2>
      </div>
    </Link>
  );
};
