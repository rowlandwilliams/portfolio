import Image from "next/image";
import Link from "next/link";
import { DesignProjectFieldsFragment } from "../../graphql/generated";

interface Props {
  designProject: DesignProjectFieldsFragment;
}

export const DesignProjectTemplate = ({ designProject }: Props) => {
  const { name, summary, mainImage, projectImages } = designProject;
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between">
      <section className="space-y-4">
        <Link
          href="/design"
          className="px-4 py-1 font-medium rounded-2xl border border-indigo-600"
        >
          {"<-"} <span className="ml-1">Back</span>
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
            width={650}
            height={400}
            alt={name}
            className="rounded-md"
            priority
          />
        )}
        {projectImages?.map(
          (projectImage) =>
            projectImage?.image?.asset?.url &&
            name && (
              <Image
                src={projectImage?.image?.asset.url}
                width={650}
                height={400}
                alt={name}
                key={projectImage?.image?.asset.url}
                className="rounded-md"
              />
            )
        )}
      </section>
    </div>
  );
};
