import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

const Document = () => (
  <Html>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <body className="bg-dark-gray text-white  text-xs">
      <article className="flex justify-between px-4 md:px-16 fixed z-50 w-full">
        <Link href="/" className="font-medium py-4 text-base">
          Rowland Williams
        </Link>
        <nav className="flex gap-x-2">
          <button>Work</button>
          <button>About</button>
        </nav>
      </article>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
