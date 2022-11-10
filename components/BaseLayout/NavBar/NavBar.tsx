import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <article className="flex justify-between items-center px-4 md:px-16 fixed z-50 w-full">
      <Link
        href="/"
        className="font-medium py-4 text-base flex gap-x-2 items-center"
      >
        <div className="border-[1.5px] border-black rounded-md overflow-hidden">
          <Image src="/logo.png" width={28} height={28} alt="logo" />
        </div>
        Rowland Williams
      </Link>
      <nav className="flex gap-x-8">
        <Link
          href="/projects?view=grid"
          className="font-medium hover:underline"
        >
          Projects
        </Link>
        <Link href="/about" className="font-medium hover:underline">
          About
        </Link>
      </nav>
    </article>
  );
};
