import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" translate="no">
        <Head>
          <meta httpEquiv="Content-Language" content="pt-BR" />
          <meta name="google" content="notranslate" />
          <meta name="translator" content="no" />
          <link rel="alternate" hrefLang="pt-BR" href="https://rbcursos.com.br" />
          {/* Script mais agressivo para prevenir tradução automática */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Desabilitar tradução automática completamente
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({
                    pageLanguage: 'pt-BR',
                    includedLanguages: 'pt-BR', 
                    autoDisplay: false,
                    layout: google.translate.TranslateElement.InlineLayout.NONE
                  }, 'google_translate_element');
                }
                
                // Instruir todos os navegadores a não traduzirem o conteúdo
                if (navigator && navigator.userAgent && navigator.userAgent.match(/chrome|chromium|firefox|safari/i)) {
                  document.documentElement.lang = 'pt-BR';
                  document.documentElement.setAttribute('translate', 'no');
                }
              `
            }}
          />
          <style>
            {`
              .notranslate {
                translate: none;
                -webkit-translate: none;
                -moz-translate: none;
                -ms-translate: none;
                -o-translate: none;
              }
              
              /* Prevenir seleção de palavras específicas para evitar tradução por ferramentas */
              .notranslate {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
            `}
          </style>
        </Head>
        <body className="notranslate">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}