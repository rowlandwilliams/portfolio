import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <body className="bg-gray-900 text-white  text-xs overflow-x-hidden">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
