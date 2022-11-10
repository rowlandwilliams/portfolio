import Image from "next/image";
import { Image as ImageType } from "../../../../graphql/generated";

interface Props {
  mainImage: ImageType | null | undefined;
  name: string | null | undefined;
}

export const ProjectTemplateMainImageAndTitle = ({
  mainImage,
  name,
}: Props) => {
  return (
    <div className="relative w-full h-[700px]">
      {mainImage?.asset?.url && name && (
        <Image
          src={mainImage?.asset?.url}
          fill
          alt={name}
          className="object-cover"
        />
      )}
      <div className="bg-gradient-to-b from-dark-gray to-transparent h-20 absolute top-0 w-full"></div>
      <section className="absolute bottom-8 px-4 md:px-16">
        <h1 className="text-4xl italic text-gray-200">{name}</h1>
      </section>
    </div>
  );
};
