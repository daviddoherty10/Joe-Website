import type { Metadata } from "next";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { ReactQueryProvider } from "../react-query/query-client";

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
      <body>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
