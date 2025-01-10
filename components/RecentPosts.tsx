import { BlogPostSkeleton } from "@/types"
import Link from "next/link"
import * as contentful from "contentful"
import { getClient, getPosts } from "@/lib/actions"

const RecentPosts = async () => {

  const client = await getClient()

  const posts = await getPosts()

  const sortedPosts = posts.toSorted((a: contentful.Entry<BlogPostSkeleton> , b: contentful.Entry<BlogPostSkeleton>) => {
    const d1 = new Date(a.fields.date as string)
    const d2 = new Date(b.fields.date as string)
    return d1 < d2 ? -1 : d1 > d2 ? 1 : 0
  })

  const shortList = sortedPosts.slice(0, 6)

  return (
    <ul>
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