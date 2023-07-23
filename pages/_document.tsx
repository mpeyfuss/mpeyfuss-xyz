import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Personal website for Marco (mpeyfuss)." key="desc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="mpeyfuss.xyz" />
        <meta
          property="og:description"
          content="Code. Art. Question Everything."
        />
        <meta property="og:image" content="https://arweave.net/vyoHX421AJNezbafUWopUTYxf7UsQ6H03Z4OguCCMaw" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
