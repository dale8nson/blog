import { BlogPostSkeleton } from "@/types"
import Link from "next/link"
import * as contentful from "contentful"
import { getClient, getPosts } from "@/lib/actions"

const RecentPosts = async () => {

  const posts = await getPosts()
  const shortList = posts.slice(0, 6)

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <ul className="m-0">
        {shortList.map(async item => {
          const { title, slug, date } = item.fields
          const d = new Date(date as string)
          const dateStr = d.toLocaleDateString("en-GB")
          return (
            <li><p className="text-wrap whitespace-break-spaces">{dateStr} - <Link href={`/blog/${slug}`} ><span className=" pr-4">{title as string}</span></Link></p> </li>
          )
        })}
        {posts.length >= 7 && <li><Link href="/blog"><i>More...</i></Link></li>}
        {/* <li><Link href="/blog"><i>More...</i></Link></li> */}
      </ul>
    </div>
  )
}

export { RecentPosts }