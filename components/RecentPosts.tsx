import { BlogPostSkeleton } from "@/types"
import Link from "next/link"
import * as contentful from "contentful"
import { getClient, getPosts } from "@/lib/actions"

const RecentPosts = async () => {

  const posts = await getPosts()
  const shortList = posts.slice(0, 6)

  return (
    <ul>
      {shortList.map(async item => {
        const { title, slug, date } = item.fields
        const d = new Date(date as string)
        const dateStr = d.toLocaleDateString("en-GB")
        return (
          <li className="text-wrap">{dateStr} - <Link href={`/blog/${slug}`} className="text-wrap whitespace-break-spaces">{title as string}</Link> </li>
        )
      })}
      {/* {posts.items.length === 7 && <li><Link href="/blog"><i>More...</i></Link></li>} */}
      <li><Link href="/blog"><i>More...</i></Link></li>
    </ul>
  )
}

export { RecentPosts }