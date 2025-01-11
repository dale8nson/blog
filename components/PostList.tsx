import Link from "next/link"
import * as contentful from "contentful"
import { BlogPostSkeleton } from "@/types"



const PostList = ({ posts }: { posts: contentful.Entry<BlogPostSkeleton>[] }) => {
  return (
    <ul className="mx-2 md:[column-count:2]">
      {posts.map(post => {
        const { date, title, slug } = post.fields
        const dateStr = new Date(date as string).toLocaleDateString()
        return (
          <li key={slug as string}>{dateStr} - <Link href={`/blog/${slug}`}>{title as string}</Link></li>
        )
      })}
    </ul>
  )
}

export { PostList }