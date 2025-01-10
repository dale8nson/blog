import { PostList } from "@/components/PostList";
import { getClient } from "@/lib/actions"
import { BlogPostSkeleton } from '@/types';
import Link from "next/link";
import * as contentful from "contentful"
import { BackButton } from "@/components/BackButton";


export default async function Page() {

  const client = await getClient()
  const posts = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost" })

  const sortedPosts = posts.items.sort((a, b) => {
    const d1 = new Date(a.fields.date as string )
    const d2 = new Date(b.fields.date as string )
    return d1 < d2 ? -1 : d1 > d2 ? 1 : 0
  })

  const dateStr = new Intl.DateTimeFormat('en-US', {
    dateStyle: "long",
    // timeStyle: 'long',
    timeZone: 'Australia/Sydney',
  }).format(new Date (sortedPosts[0].fields.date as string))

  return (
    <main className="w-11/12 min-h-[24.4vw] md:w-2/3 flex flex-col justify-start items-start content-evenly gap-5 md:columns-2" >
      <hr className="border-[#000000] w-full border-[1.5px]" />
      <BackButton />
      <PostList posts={sortedPosts as contentful.Entry<BlogPostSkeleton>[]} />
      <hr className="border-[#000000] self-justify-end w-full border-[1.5px]" />
    </main>
  )
}