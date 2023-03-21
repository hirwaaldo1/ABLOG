import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import { wrapper } from "../store";
import Header from "../components/layout/Header";
import Head from "next/head";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ABLOG</title>
        <meta
          name="description"
          content="ABLOG is a website that provides a platform for all kinds of new and interesting content."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-2xl w-11/12 mx-auto">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default wrapper.withRedux(App);
