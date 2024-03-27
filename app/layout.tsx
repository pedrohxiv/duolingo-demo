import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duolingo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
