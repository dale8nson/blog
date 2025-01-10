import { ReactNode } from "react";
import { getClient } from "@/lib/actions"
import * as contentful from "contentful"
import { BlogPostSkeleton } from "@/types";

export default async function Layout({children}:{children:ReactNode}) {

  const client = await getClient()

  const posts = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost" })

  const date = posts.items.reduce((prev: Date, current: contentful.Entry<BlogPostSkeleton>) => {
    const d = new Date(current.fields.date as string)
    if(d > prev) return d
    else return prev
  }, new Date(posts.items[0].fields.date as string))

  const dateStr = new Intl.DateTimeFormat('en-US', {
    dateStyle: "long",
    // timeStyle: 'long',
    timeZone: 'Australia/Sydney',
  }).format(new Date (date))

  return (
    <>
    <div className="flex flex-row justify-start items-center w-2/3 h-4 -mt-2 mb-4">
      <p className="leading-5">{dateStr}</p>
    </div>
    {children}
    </>
  )
}