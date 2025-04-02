export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="pt-BR" />
        {/* Impede tradução automática */}
        <meta name="google" content="notranslate" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}