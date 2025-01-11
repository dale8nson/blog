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

export const revalidate = 60

export default async function Page() {

  const site = await getSite()
  const posts = await getPosts()
  const postListContent = await getPostListContent()
  const preListContent = postListContent?.preListContent

  const dateStr = getDateString(posts[0].fields.date?.toLocaleString() as string)

  return (
    <>
      <Header site={site} date={dateStr} />
      <main className="w-11/12 min-h-[60vh] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5" >
        <BackButton />
        {preListContent && <Entry node={preListContent as types.Block}/>}
        <PostList posts={posts as contentful.Entry<BlogPostSkeleton>[]} />
      </main>
      <Footer />
    </>
  )
}