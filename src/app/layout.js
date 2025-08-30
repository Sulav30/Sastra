import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./component/cart/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sastra",
  description: "Nepal's No.1 clothing brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sastraicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <NavBar />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
