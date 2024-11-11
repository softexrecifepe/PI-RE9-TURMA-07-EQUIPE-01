
import { Header } from "./navbar/page"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <title>Re9 - Site de vagas</title>
      <link rel="icon" href="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f4bc.svg" />
      <body>    

        <Header />
        <main>{children}</main>

      </body>
    </html>
  );
}
