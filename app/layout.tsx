import type { Metadata } from "next";
import "./globals.css";
import * as contentful from "contentful"
import { useCMS } from "@/lib/hooks/useCMS"
import { SiteSkeleton } from "@/types";

const client = useCMS()
const entries = await client.getEntries<SiteSkeleton>({content_type:"site"})
console.log("entries: ", entries)
const { id } = entries.items[0].sys
const entry = await client.getEntry<SiteSkeleton>(id)
console.log("site entry: ", entry)
const { title } = entry.fields

export const metadata: Metadata = {
  title: title as string,
  description: "",
};

// const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
      <body
        className="min-w-screen min-h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col justify-start items-center [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4 [&_h2]:text-2xl"
      >
        <div className="w-11/12 md:w-2/3 p-4 flex flex-row justify-start">
          <h1 className="font-bold text-[2.5rem]">{title as string}</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
