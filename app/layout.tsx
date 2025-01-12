import type { Metadata } from "next";

import "./globals.css";
import { getSite, loadFavicon } from "@/lib/actions";

const site = await getSite()
const { title, description, keywords, publisher, authors } = site

export async function generateMetadata(): Promise<Metadata> {

  // console.log("keywords: ", keywords as string[])
  return {
    title: title as string,
    description: description as string,
    publisher: publisher as string,
    authors: authors,
    keywords: keywords as string[],
    creator: "Dale Hutchinson"
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // await loadFavicon()

  return (

    <html lang="en">
      <body
        className="min-w-screen min-h-screen md:h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col items-center py-4 [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4"
      >
        {children}
      </body>
    </html>
  );
}
