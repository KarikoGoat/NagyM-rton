import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Kapus Karcsi</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
        name="description"
        content="Üdvözöljük a Kapuautomatizálás Specialistájának honlapján!
        Automatizálja ingatlanjának bejárását a legmodernebb technológiával!
        Álmodozott már arról, hogy az otthonába vagy munkahelyére történő bejutás egyszerű és zökkenőmentes legyen? Itt a megoldás! Bötös Károly, a „Kapus Károly” néven is ismert szakember, személy- és gépjármű forgalmat biztosító kapuk és garázsajtók automatizálásával foglalkozik."
        />  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
