import { BlogPostSkeleton } from "@/types"
import Link from "next/link"
import { getClient } from "@/lib/actions"

const RecentPosts = async () => {

  const client = await getClient()

  const posts = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost", limit: 7 })

  return (
    <ul>
      {posts.items.map(async item => {
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