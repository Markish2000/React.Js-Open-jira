import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link ref='shortcut icon' href='/favicon.ico' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
