import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Navbar, Footer } from "@/components/";
import { ProductsProvider } from "@/context/productsContext";
import { CategoryProvider } from "@/context/categoryContext";
import { CartItemProvier } from "@/context/cartContext";
import { WishlistProvider } from "@/context/wishlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <CartItemProvier> 
          <CategoryProvider>
            <ProductsProvider>
              <WishlistProvider>
                <div className="w-full fixed top-0 left-0 z-10">
                <Header />
                  <Navbar />
                   
                </div>
                {children} 
                <Footer />
              </WishlistProvider>
            </ProductsProvider>
          </CategoryProvider>
        </CartItemProvier>
      </body>
    </html>
  );
}
