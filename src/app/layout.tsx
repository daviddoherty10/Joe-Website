import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { ReactQueryProvider } from "../react-query/query-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JDwyer Tennis",
  description: "Joe 'O'Dwyer Tennis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
