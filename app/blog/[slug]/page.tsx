import { getPostBySlug } from "@/lib/actions"
import { BlogPostSkeleton } from "@/types"
import { Entry } from "@/components/Entry"
import * as types from "@contentful/rich-text-types"
import { BackButton } from "@/components/BackButton"
import { getDateString } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export const revalidate = 60

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { title, date, body } = await getPostBySlug(slug)

  const dateStr = getDateString(date as string)

  console.log("body: ", body)
  return (
    <>
      <header className="flex flex-col w-2/3 h-full items-start gap-2 border-[#000000] border-b-[1.5px] py-4 mb-2">
    <h1>{title as string}</h1>
    <p>{dateStr}</p>
    </header>
      {/* <Header slug={slug} /> */}
      <main className="flex flex-col w-2/3 min-h-[60vh] items-start gap-4 md:overflow-y-scroll">
        {/* <hr className="border-[#000000] w-full border-[1.5px]" /> */}
        <BackButton />
        <Entry node={body as types.Block} />
        {/* <hr className="border-[#000000] w-full border-[1.5px]" /> */}
      </main>
      <Footer />
    </>
  )
}