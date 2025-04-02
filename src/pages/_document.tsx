import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="Content-Language" content="pt-BR" />
          <meta name="google" content="notranslate" />
          {/* Script para prevenir tradução automática */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({
                    pageLanguage: 'pt',
                    includedLanguages: 'pt',
                    autoDisplay: false,
                    layout: google.translate.TranslateElement.InlineLayout.NONE
                  }, 'google_translate_element');
                }
              `
            }}
          />
        </Head>
        <body className="notranslate">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}