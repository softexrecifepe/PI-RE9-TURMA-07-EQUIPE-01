import "./styles/navBar.css"
import "./styles/landingPage1.css"
import "./styles/landingPage2.css"
import "./styles/global.css"
import NavBar from "./pages/navBar";
import LandingPage1 from "./pages/landingPage1";
import LandingPage2 from "./pages/landingPage2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>

         <header><NavBar /></header>

         <main><LandingPage1 /></main>
         <main><LandingPage2 /></main>

          <main>{children}</main>


      </body>
    </html>
  );
}
