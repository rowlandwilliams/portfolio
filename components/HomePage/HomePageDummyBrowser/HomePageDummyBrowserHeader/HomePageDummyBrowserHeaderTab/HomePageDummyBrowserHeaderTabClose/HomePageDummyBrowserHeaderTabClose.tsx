import Image from "next/image";

export const HomePageDummyBrowserHeaderTabClose = () => {
  return (
    <div className="bg-transparent hover:bg-gray-300 p-1 rounded-full">
      <Image src={`/home/close.svg`} width={8} height={8} alt="close" />
    </div>
  );
};
