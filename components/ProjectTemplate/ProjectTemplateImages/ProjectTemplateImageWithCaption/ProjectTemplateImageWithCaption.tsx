import classNames from "classnames";
import Image from "next/image";
import { Image as ImageType } from "../../../../graphql/generated";

interface Props {
  image: ImageType;
  caption: string | null | undefined;
  name: string | null | undefined;
  isFirst?: boolean;
  isLast?: boolean;
}

export const ProjectTemplateImageWithCaption = ({
  image,
  caption,
  name,
  isFirst = false,
  isLast = false,
}: Props) => {
  const alt = caption ? caption : "";

  return image?.asset?.url && name ? (
    <div
      className={classNames("relative min-w-[800px]", {
        "ml-16": isFirst,
        "mr-16": isLast,
      })}
    >
      <Image
        src={image?.asset?.url}
        alt={name}
        fill
        className="rounded-lg object-cover"
      />
      {caption && <p>{caption}</p>}
    </div>
  ) : null;
};
