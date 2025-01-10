import { getClient, getPostBySlug } from "@/lib/actions"
import { BlogPostSkeleton } from "@/types"
import { Entry } from "@/components/Entry"
import * as types from "@contentful/rich-text-types"
import { BackButton } from "@/components/BackButton"
import { getDateString } from "@/lib/utils"
import { Footer } from "@/components/Footer"

export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const { slug } = await params
  const { title, date, body } = await getPostBySlug(slug)

  // const dateStr = new Intl.DateTimeFormat("en-US", {
  //   dateStyle:"long"
  // }).format(new Date(date as string))
  const dateStr = getDateString(date as string)

  console.log("body: ", body)
  return (
    <>
    <header className="flex flex-col w-2/3 h-full items-start gap-2 py-2">
    <h1>{title as string}</h1>
    <p>{dateStr}</p>
    </header>
      <main className="flex flex-col w-2/3 h-full items-start gap-4">
        <hr className="border-[#000000] w-full border-[1.5px]" />
        <BackButton/>
        <Entry node={body as types.Block} />
        <hr className="border-[#000000] w-full border-[1.5px]" />
      </main>
      <Footer />
    </>
  )
}