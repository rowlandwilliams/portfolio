import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
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
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  const alt = caption ? caption : "";

  return image?.asset?.url && name ? (
    <div
      className={classNames("relative md:min-w-[1000px]", {
        "ml-16": isFirst,
        "mr-16": isLast,
      })}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Image src={image?.asset?.url} alt={alt} fill className="rounded-lg " />
      {caption && (
        <p
          className={classNames(
            "absolute -bottom-6 px-2 text-xs font-medium transition-opacity duration-300",
            {
              "opacity-100": hovered,
              "opacity-0": !hovered,
            }
          )}
        >
          {caption}
        </p>
      )}
    </div>
  ) : null;
};
