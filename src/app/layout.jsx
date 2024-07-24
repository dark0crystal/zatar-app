import { Inter, Lalezar } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const lalezarFont = Lalezar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "زعتر",
  description: "موقع لإقتراح أماكن للأكل",
  keywords: "where to eat , where should i eat , إقترح لي ,وين آكل,zatar,زعتر, أماكن, أكل, عمان, تقييم",
  author: "Al-Mardas",
 
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
     
        <meta charSet={metadata.charset} />
      
      </Head>
      <body className={lalezarFont.className}>
        <main className="h-[95vh]">
          {/* navbar */}
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
