import Image from "next/image";

export const HomePageDummyBrowserHeaderSearchBarArrows = () => {
  return (
    <>
      <Image
        src={"/home/arrow.svg"}
        width={18}
        height={18}
        alt="left-arrow"
        className="opacity-60"
      />
      <Image
        src={"/home/arrow.svg"}
        width={18}
        height={18}
        className="rotate-180 opacity-60"
        alt="right-arrow"
      />
      <Image
        src={"/home/refresh.svg"}
        width={18}
        height={18}
        className="opacity-60"
        alt="refresh"
      />
    </>
  );
};
