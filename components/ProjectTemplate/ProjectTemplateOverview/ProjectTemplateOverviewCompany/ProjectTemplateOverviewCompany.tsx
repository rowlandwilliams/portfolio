import Image from "next/image";
import Link from "next/link";
import { Image as ImageType } from "../../../../graphql/generated";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  companyLogo: ImageType | null | undefined;
  name: string | null | undefined;
  companyUrl: string | null | undefined;
  isSmall?: boolean;
}

export const ProjectTemplateOverviewCompany = ({
  companyLogo,
  name,
  companyUrl,
  isSmall = false,
}: Props) => {
  return companyLogo?.asset?.url && name && companyUrl ? (
    <ProjectTemplateOverviewTitleAndChildSection
      title="Company"
      isSmall={isSmall}
    >
      <div className="h-6 flex items-center">
        <Link href={companyUrl} target="_blank">
          <Image
            src={companyLogo?.asset.url}
            width={isSmall ? 100 : 120}
            height={10}
            alt={name}
          />
        </Link>
      </div>
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
