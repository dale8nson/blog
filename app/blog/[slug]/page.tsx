import { getPostBySlug, getSite } from "@/lib/actions"
import { Entry } from "@/components/Entry"
import * as types from "@contentful/rich-text-types"
import { BackButton } from "@/components/BackButton"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Metadata } from "next"

export const revalidate = 60

const site = await getSite()

export async function generateMetadata({params}:{params: Promise<{ slug: string }>}): Promise<Metadata> {

  const { title, description, publisher } = site
  const slug = (await params).slug
  const post = await getPostBySlug(slug)
  const { title: postTitle, authors, keywords } = post
  return {
    title: `${title} | ${postTitle}` as string,
    description: description as string,
    publisher: publisher as string,
    authors: authors as {name: string}[],
    keywords: keywords as string[],
    creator: "Dale Hutchinson"
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const { body } = post

  return (
    <>
      <Header post={post} site={site} />
      <main className="w-11/12 min-h-[60vh] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5 md:overflow-y-scroll">
        <BackButton />
        <Entry node={body as types.Block} />
      </main>
      <Footer />
    </>
  )
}