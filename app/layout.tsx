import type { Metadata } from "next";

import "./globals.css";
import { getSite, loadFavicon } from "@/lib/actions";

const site = await getSite()
const { title, favicon } = site

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: title as string
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  await loadFavicon()

  return (

    <html lang="en">
      <body
        className="min-w-screen min-h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col justify-start items-center py-4 [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4 [&_h2]:text-2xl"
      >
        {children}
      </body>
    </html>
  );
}
