import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className='bg-dark-gray text-white px-4 text-xs md:px-32'>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
