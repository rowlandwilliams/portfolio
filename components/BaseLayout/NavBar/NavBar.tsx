import Link from "next/link";

export const NavBar = () => {
  return (
    <article className="flex justify-between items-center px-4 md:px-20 fixed z-50 w-full">
      <Link
        href="/"
        className="font-medium py-4 text-base flex gap-x-2 items-center"
      >
        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-blue-700 via-rose-600 to-yellow-400"></div>
      </Link>
    </article>
  );
};
