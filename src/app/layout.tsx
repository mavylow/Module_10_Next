import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { createGlobalStyle } from "styled-components";
import ClientsInit from "./_components/ClientsInit.tsx";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
`;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="description" content="Social network from Sidekick" />
        <meta name="keywords" content="social, network, posts, community" />
        <meta name="author" content="Sidekick" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <title>social_media</title>
      </head>
      <body>
        <ClientsInit>
          <div id="root">
            <Global />
            <Header />
            {children}
            <Footer />
          </div>
        </ClientsInit>
        <div id="modal"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
