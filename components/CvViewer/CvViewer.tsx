import Image from "next/image";

export const CvViewer = () => {
  return (
    <Image
      src={"/cv_2022.png"}
      width={800}
      height={800}
      alt="cv"
      className="rounded-lg"
    />
  );
};
