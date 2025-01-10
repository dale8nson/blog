import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import * as contentful from "contentful"
// import { useCMS } from "@/lib/hooks/useCMS"
import { SiteSkeleton } from "@/types";
import Link from "next/link";
import { getClient, getSite } from "@/lib/actions";


const client = await getClient()

// const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

// type Props = {
//   params: Promise<{ id: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }
const site = await getSite()
  const { title } = site

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

  return (

    <html lang="en">
      <body
        className="min-w-screen min-h-screen text-[#000000] bg-[#f5f5f5] font-serif flex flex-col justify-start items-center py-4 [&_a]:text-[#3f81d2] [&_a]:underline list-inside [&_ul]:list-disc [&_ul]:translate-x-4 [&_h2]:text-2xl"
      >
        {/* <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
          <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
        </header> */}
        {children}
      </body>
    </html>
  );
}
