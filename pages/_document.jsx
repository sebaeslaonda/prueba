import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <style jsx>
          {
            `
            @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
            *{
              margin:0;
              padding:0,
              box-sizing:border-box;
              font-family: 'Lato', sans-serif;
            }`
          }
        </style>
          <NextScript />
        </body>
      </Html>
      
    )
  }
}

export default MyDocument