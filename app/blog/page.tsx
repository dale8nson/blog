import { PostList } from "@/components/PostList";
import { getClient, getPosts, getSite } from "@/lib/actions"
import { BlogPostSkeleton } from '@/types';
import * as contentful from "contentful"
import { BackButton } from "@/components/BackButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDateString } from "@/lib/utils";

export const revalidate = 60

export default async function Page() {

  const site = await getSite()
  const posts = await getPosts()

  const dateStr = getDateString(posts[0].fields.date?.toLocaleString() as string)

  return (

    <>
      <Header site={site} date={dateStr} />
      <div className="flex flex-row justify-start items-center w-2/3 h-4 -mt-2 mb-4">
        
      </div>
      <main className="w-11/12 md:min-h-[60vh] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5 md:[column-count:2] " >
        <BackButton />
        <PostList posts={posts as contentful.Entry<BlogPostSkeleton>[]} />
      </main>
      <Footer />
    </>
  )
}