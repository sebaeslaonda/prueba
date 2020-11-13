import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
            <style jsx>
                {
                    `*{
                        padding:0;
                        margin:0;
                        overflow:hidden;
                    }`
                }
            </style>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument