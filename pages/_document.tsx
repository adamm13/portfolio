import Document, {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link 
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" 
          rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-to-r from-gray-400 to-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument