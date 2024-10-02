import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Import global CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Surd Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
