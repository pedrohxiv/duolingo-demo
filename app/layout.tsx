import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

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
    <ClerkProvider>
      <html>
        <body className={font.className}>
          <Toaster richColors />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
