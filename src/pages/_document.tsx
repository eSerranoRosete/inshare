import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
