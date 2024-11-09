import "./styles/navBar.css"
import "./styles/landingPage1.css"
import "./styles/landingPage2.css"
import "./styles/global.css"
import "./styles/landingPage3.css"
import { Header } from "./components/header"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>    

        <Header />
        <main>{children}</main>

      </body>
    </html>
  );
}
