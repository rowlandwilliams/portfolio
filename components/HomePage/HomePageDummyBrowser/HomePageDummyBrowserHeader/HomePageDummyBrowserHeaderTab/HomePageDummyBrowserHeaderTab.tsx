import Image from "next/image";
import { HomePageDummyBrowserHeaderTabClose } from "./HomePageDummyBrowserHeaderTabClose/HomePageDummyBrowserHeaderTabClose";

interface Props {
  title: string;
  iconName: string;
}

export const HomePageDummyBrowserHeaderTab = ({ title, iconName }: Props) => {
  return (
    <div className="bg-gray-200 w-44 h-8 rounded-t-lg px-3 py-2 text-gray-800 flex gap-x-2 items-center justify-between">
      <div className="flex gap-x-2">
        <Image
          src={`/home/${iconName}.svg`}
          width={16}
          height={16}
          alt={iconName}
        />
        {title}
      </div>
      <HomePageDummyBrowserHeaderTabClose />
    </div>
  );
};
