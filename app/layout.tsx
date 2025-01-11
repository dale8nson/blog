import type { Metadata } from "next";

import "./globals.css";
import { getSite } from "@/lib/actions";
import fs from "node:fs/promises"
import { NextRequest } from "next/server";
import sharp from "sharp";
import ico from "sharp-ico"


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

  // const site = await getSite()
  console.log("site: ", site)
  const { favicon } = site
  const { url, details, fileName } = (favicon as any)?.fields.file
  const { width, height } = details.image

  console.log("__dirname: ", __dirname)
  const res = await fetch(`https:${url}`)
  const blob = await res.blob()
  const bytes = await blob.bytes()
  const fileHandle = await fs.open(process.cwd() + "/public/" + fileName, "w+")
  await fileHandle.writeFile(bytes)
  await fileHandle.close()

  const info = await ico.sharpsToIco([sharp(process.cwd() + "/public/" + fileName)], process.cwd() + "/app/" + "favicon.ico")



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
