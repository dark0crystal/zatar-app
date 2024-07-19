import { Inter ,Lalezar } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import { useSession, signIn  , signOut } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

const lalezarFont =Lalezar({
  weight :'400',
  subsets : ["latin"] , 
  display : 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
     
    <html lang="ar" dir="rtl">
      <body className={lalezarFont.className}>

        {/* navbar */}
          <Navbar/>

        
       
        {children}
        
        <Footer/>
        </body>
    </html>
    
  );
}