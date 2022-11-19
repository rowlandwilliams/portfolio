import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <script src="https://co2widget.com/build/widget.min.js" defer></script>
    </Head>
    <body className="bg-gradient-to-t from-dark-gray to-indigo-600 text-white  text-xs overflow-x-hidden">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
