import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <script src="https://co2widget.com/build/widget.min.js" defer></script>
    </Head>
    <body className="bg-dark-gray">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
