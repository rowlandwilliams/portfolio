import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <article className="flex justify-between items-center px-4 md:px-20 fixed z-50 w-full">
      <Link
        href="/"
        className="font-medium py-4 text-base flex gap-x-2 items-center"
      >
        <div className="border-[1.5px] border-black rounded-md overflow-hidden">
          <Image src="/logo.png" width={24} height={24} alt="logo" />
        </div>
      </Link>
      
    </article>
  );
};
