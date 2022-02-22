import Head from "next/head";
import LanguageProvider from "store/language-context";
import ThemeWrapper from "store/theme-context";

import "../styles/globals.css";

const Noop = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <LanguageProvider>
      <ThemeWrapper>
        <Layout>
          <Head>
            <title>José Eduardo</title>
            {/* This title will be loaded before any other title. Use it as a fallback in case for some reason some page do not work. */}
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeWrapper>
    </LanguageProvider>
  );
}

export default MyApp;
