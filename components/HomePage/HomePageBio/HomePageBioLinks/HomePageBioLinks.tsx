import Image from "next/image";
import Link from "next/link";
import { HomePageBioLinkArrow } from "./HomePageBioLinkArrow/HomePageBioLinkArrow";

export const HomePageBioLinks = () => {
  return (
    <section className="py-2 flex gap-x-4 text-gray-300">
      <div className="flex gap-x-4">
        <Link
          href="/code"
          className="text-sm py-0.5 rounded-2xl hover:opacity-80 flex items-center gap-x-2"
        >
          Code
          <span className="text-sky-300">
            <HomePageBioLinkArrow />
          </span>
        </Link>
        <Link
          href="/design"
          className="text-sm py-0.5 rounded-2xl hover:opacity-80 flex items-center gap-x-2"
        >
          Design
          <span className="text-indigo-500">
            <HomePageBioLinkArrow />
          </span>
        </Link>
      </div>
      <div className="flex gap-x-2 items-center ">
        <Link
          href="https://github.com/rowlandwilliams"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image src="/github.svg" width={22} height={22} alt="github" />
        </Link>
      </div>
    </section>
  );
};
