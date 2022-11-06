import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <body className="bg-gray-900 text-white  text-xs">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
