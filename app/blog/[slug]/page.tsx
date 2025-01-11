import { getPostBySlug } from "@/lib/actions"
import { Entry } from "@/components/Entry"
import * as types from "@contentful/rich-text-types"
import { BackButton } from "@/components/BackButton"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export const revalidate = 60

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const { body } = post

  return (
    <>
      <Header post={post} />
      <main className="w-11/12 min-h-[60vh] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5 md:overflow-y-scroll">
        <BackButton />
        <Entry node={body as types.Block} />
      </main>
      <Footer />
    </>
  )
}