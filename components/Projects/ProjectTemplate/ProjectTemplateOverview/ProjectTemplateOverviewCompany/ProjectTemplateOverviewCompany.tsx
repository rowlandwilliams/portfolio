import Image from "next/image";
import Link from "next/link";
import { Image as ImageType } from "../../../../../graphql/generated";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  companyLogo: ImageType | null | undefined;
  name: string | null | undefined;
  companyUrl: string | null | undefined;
}

export const ProjectTemplateOverviewCompany = ({
  companyLogo,
  name,
  companyUrl,
}: Props) => {
  return companyLogo?.asset?.url && name && companyUrl ? (
    <ProjectTemplateOverviewTitleAndChildSection title="Company">
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
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
