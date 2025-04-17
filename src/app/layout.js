import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "투두리스트",
  description: "React Query로 만든 투두리스트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
