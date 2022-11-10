import Image from "next/image";
import Link from "next/link";
import { ProjectFieldsFragment } from "../../../../graphql/generated";
import { UiSectionWithMargin } from "../../../SHARED/UiSectionWithMargin/UiSectionWithMargin";

interface Props {
  project: ProjectFieldsFragment;
}

export const ProjectTemplateOverview = ({ project }: Props) => {
  const { name, summary, color, companyLogo, companyUrl } = project;

  const textColorClass = `text-${color}`;
  return (
    <UiSectionWithMargin yPadding className="h-screen">
      <h1 className="text-6xl text-white border-b border-gray-600 pb-8">
        {summary}
      </h1>
      <section className="py-8 space-y-4">
        <h1 className="font-medium">Company</h1>
        {companyLogo?.asset?.url && name && companyUrl && (
          <div>
            <Link href={companyUrl} target="_blank">
              <Image
                src={companyLogo?.asset.url}
                width={120}
                height={100}
                alt={name}
              />
            </Link>
          </div>
        )}
      </section>
      {/* <div>
        <h1 className="text-indigo-400 text-lg">Overview</h1>
        <PortableText
          value={overviewRaw}
          components={ProjectTemplatePortableTextComponents}
        />
      </div> */}
    </UiSectionWithMargin>
  );
};
