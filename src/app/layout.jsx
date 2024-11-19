import { Barlow, Poppins, Rubik, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import ScrollProvider from "./_scrollProvider";
import Navbar from "@/components/shared/navbar/Navbar";
import LoadingProvider from "./_loadingProvider";
import Footer from "@/components/shared/footer/Footer";
import ScrollToTopProvider from "@/components/shared/ScrollToTopProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

const berlinSans = localFont({
  src: [
    {
      path: "../../public/fonts/BRLNSDB.woff",
      style: "normal",
    },
  ],
  variable: "--font-berlin-sans",
});

export const metadata = {
  title: "Kainu",
  description: "Streaming vidio games online on live Kainu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${berlinSans.variable} ${rubik.variable} ${barlow.variable} ${poppins.variable} ${archivo.variable}`}
      >
        <LoadingProvider>
          {/* <ScrollProvider> */}
          <ScrollToTopProvider />
          <Navbar />
          {children}
          <Footer />
          {/* </ScrollProvider> */}
        </LoadingProvider>
      </body>
    </html>
  );
}
