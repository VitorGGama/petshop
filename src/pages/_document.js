import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcurt icon"
          href="/images/favicon.png"
          type="image/png"
          sizes="256x256"
        />
        <meta name="author" content="Vitor G. Gama" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
