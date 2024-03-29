import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { DesignProjectFieldsFragment } from "../../graphql/generated";

interface Props {
  designProject: DesignProjectFieldsFragment;
}

export const DesignProjectTemplate = ({ designProject }: Props) => {
  const { name, summary, mainImage, projectImages, color } = designProject;
  const backBorderColor = `border-${color}`;
  const hoverBackBgColor = `hover:bg-${color}`;
  return (
    <div className="flex flex-col xl:flex-row gap-4 justify-between">
      <section className="space-y-4">
        <Link href="/design" className="font-medium flex gap-x-1 items-center">
          <div
            className={classNames(
              "w-3 h-3 border rounded-full",
              backBorderColor,
              hoverBackBgColor
            )}
          />
          <span className="ml-1">Back</span>
        </Link>
        <div className="space-y-2">
          <h1 className="text-sm">{name}</h1>
          <h2 className="text-gray-400">{summary}</h2>
        </div>
      </section>
      <section className="space-y-2">
        {mainImage?.asset?.url && name && (
          <Image
            src={mainImage?.asset.url}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1280px) 94vw, 47vw"
            alt={name}
            className="rounded-md w-full h-auto"
            priority
          />
        )}
        {projectImages?.map(
          (projectImage) =>
            projectImage?.image?.asset?.url &&
            name && (
              <Image
                src={projectImage?.image?.asset.url}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1280px) 94vw, 47vw"
                alt={name}
                key={projectImage?.image?.asset.url}
                className="rounded-md w-full h-auto"
              />
            )
        )}
      </section>
    </div>
  );
};
