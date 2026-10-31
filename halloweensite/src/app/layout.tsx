import type { Metadata } from "next";
import { Creepster } from "next/font/google";
import "@/presentation/style/globals.css";
import Navbar from "@/presentation/components/navbar";
import { siteContent } from "@/data/site-content";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${creepster.variable} h-full antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
