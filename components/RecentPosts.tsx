import { BlogPostSkeleton } from "@/types"
import Link from "next/link"
import * as contentful from "contentful"
import { getClient, getPosts } from "@/lib/actions"

const RecentPosts = async () => {

  const client = await getClient()

  const posts = await getPosts()

  const shortList = posts.slice(0, 6)

  return (
    <ul className="mx-2">
      {shortList.map(async item => {
        // const postId = item.sys.id
        // const entry = await client.getEntry<BlogPostSkeleton>(postId)
        const { title, slug, date } = item.fields
        const d = new Date(date as string)
        const dateStr = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
        return (
          <li>{dateStr} - <Link href={`/blog/${slug}`}>{title as string}</Link> </li>
        )
      })}
      {/* {posts.items.length === 7 && <li><Link href="/blog"><i>More...</i></Link></li>} */}
      <li><Link href="/blog"><i>More...</i></Link></li>
    </ul>
  )
}

export { RecentPosts }