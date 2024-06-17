import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./modules/handlers/addCart";
import { NoShowFooter, NoShowNav } from "./modules/components/home/noShow";
import { DataProvider } from "./modules/handlers/fechData";
import { FormProvider } from "./modules/handlers/form";
import 'animate.css/animate.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movistar ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className={inter.className}>
          <DataProvider> 
              <CartProvider>
                    <FormProvider>
                        <NoShowNav/>
                          {children}
                        <NoShowFooter/>
                    </FormProvider>
              </CartProvider>
          </DataProvider>
        </body>
    </html>
  );
}
