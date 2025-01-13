import { PostList } from "@/components/PostList";
import { getPosts, getSite, getPostListContent } from "@/lib/actions"
import { BlogPostSkeleton } from '@/types';
import * as contentful from "contentful"
import { BackButton } from "@/components/BackButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDateString } from "@/lib/utils";
import { Entry } from "@/components/Entry";
import * as types from "@contentful/rich-text-types"
import { Metadata } from "next";

export const revalidate = 60

const site = await getSite()
const posts = await getPosts()

export async function generateMetadata(): Promise<Metadata> {

  const { title, description, keywords, publisher } = site
  const postMeta = (posts as contentful.Entry<BlogPostSkeleton, undefined, string>[]).reduce((prev: { authors: ({ name: string } | null)[], keywords: string[] }, cur: contentful.Entry<BlogPostSkeleton, undefined, string>) => {
    const { keywords: postKeywords, authors } = cur.fields
    let authArr: ({ name: string } | null)[] = []

    console.log("postKeywords: ", postKeywords)
    

    if (authors) {
      authArr = (authors as string[]).map(author => {
        if (!(prev.authors.some(auth => auth && auth.name === author))) return { name: author }
        return null
      })
    }
    return { authors: [...(prev.authors), ...authArr], keywords: prev.keywords?.concat(postKeywords as string[] ?? [])}
  }, { authors: [], keywords: [] })

  return {
    title: `${title} | Blog` as string,
    description: description as string,
    publisher: publisher as string,
    authors: postMeta.authors as { name: string }[],
    keywords: [...(keywords ?? []), ...postMeta.keywords].join(", "),
    creator: "Dale Hutchinson"
  }
}

export default async function Page() {

  const postListContent = await getPostListContent()
  const preListContent = postListContent?.preListContent

  const dateStr = getDateString(posts[0].fields.date?.toLocaleString() as string)

  return (
    <>
      <Header site={site} date={dateStr} />
      <main className="w-11/12 min-h-[60vh] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5" >
        {preListContent && <Entry node={preListContent as types.Block} />}
        <PostList posts={posts as contentful.Entry<BlogPostSkeleton>[]} />
      </main>
      <Footer />
    </>
  )
}