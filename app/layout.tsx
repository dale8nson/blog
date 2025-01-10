import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import * as contentful from "contentful"
// import { useCMS } from "@/lib/hooks/useCMS"
import { SiteSkeleton } from "@/types";
import Link from "next/link";
import { getClient } from "@/lib/actions";


const client = await getClient()

// const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

// type Props = {
//   params: Promise<{ id: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }

export async function generateMetadata(): Promise<Metadata> {
  // const client = await getClient()
  const entries = await client.getEntries<SiteSkeleton>({ content_type: "site" })
  console.log("entries: ", entries)
  const { id } = entries.items[0].sys
  const entry = await client.getEntry<SiteSkeleton>(id)
  console.log("site entry: ", entry)
  const { title } = entry.fields
  return {
    title: title as string
  }

}

// export const metadata: Metadata = {
//   title: title as string,
//   description: "",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const entries = await client.getEntries<SiteSkeleton>({ content_type: "site" })
  console.log("entries: ", entries)
  const { id } = entries.items[0].sys
  const entry = await client.getEntry<SiteSkeleton>(id)
  console.log("site entry: ", entry)
  const { title } = entry.fields

  return (

    <html lang="en">
      <body
        className="min-w-screen min-h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col justify-start items-center py-4 [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4 [&_h2]:text-2xl"
      >
        <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
          <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
        </header>
        {children}
      </body>
    </html>
  );
}
