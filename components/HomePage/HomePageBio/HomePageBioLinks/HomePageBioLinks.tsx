import Image from "next/image";
import Link from "next/link";
import { HomePageBioLinkArrow } from "./HomePageBioLinkArrow/HomePageBioLinkArrow";

export const HomePageBioLinks = () => {
  return (
    <section className="py-2 flex gap-x-4">
      <div className="flex gap-x-2 font-medium">
        <Link
          href="/projects?view=grid"
          className="border text-sm px-4 py-0.5 border-sky-300 rounded-2xl hover:opacity-80 flex items-center gap-x-2"
        >
          View Projects{" "}
          <span className="text-sky-300">
            <HomePageBioLinkArrow />
          </span>
        </Link>
        <Link
          href="/cv"
          className="border text-sm px-4 py-0.5 border-yellow-300 rounded-2xl hover:opacity-80 flex items-center gap-x-2"
        >
          View CV{" "}
          <span className="text-yellow-300">
            <HomePageBioLinkArrow />
          </span>
        </Link>
      </div>
      <div className="flex gap-x-2 items-center">
        <Link
          href="https://github.com/rowlandwilliams"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image src="/github.svg" width={22} height={22} alt="github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rowland-williams-51649318b/"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image src="/linkedin.svg" width={22} height={22} alt="linkedin" />
        </Link>
      </div>
    </section>
  );
};
