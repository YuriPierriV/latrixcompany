import "/styles/globals.css";
import Head from "next/head";

// Importe o ThemeProvider do seu arquivo de contexto
import { ThemeProvider } from ".//components/utils/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Envolva o Component com o ThemeProvider */}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
