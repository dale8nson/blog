import { useCMS } from "@/lib/hooks/useCMS";
import * as contentful from "contentful"
import { BlogPostSkeleton, HomepageSkeleton } from "@/types";
import * as types from "@contentful/rich-text-types"
import { Entry } from "@/components/Entry";
import Link from "next/link";

export default async function Home() {
  const client = useCMS()

  console.log("client: ", client)

  const homepage = await client.getEntries<HomepageSkeleton>({ content_type: "homepage" })
  console.log("homepage.items: ", homepage.items)
  const id = homepage.items[0].sys.id
  const entry = await client.getEntry<HomepageSkeleton>(id)
  console.log("entry: ", entry)
  const { fields } = entry
  console.log("fields: ", fields)
  const { welcomeText } = fields
  console.log("welcomeText: ", welcomeText)

  const posts = await client.getEntries<BlogPostSkeleton>({content_type:"blogPost", limit: 7})

  console.log("posts: ", posts)

  const RecentPosts = () => (
    <ul>
    {posts.items.map(async item => {
      const postId = item.sys.id
      const entry = await client.getEntry<BlogPostSkeleton>(postId)
      const { title, slug, date } = entry.fields
      const d = new Date(date as string)
      const dateStr = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
      return (
        <li>{dateStr} - <Link href={`/blog/${slug}`}>{title as string}</Link> </li>
      )
    })}
    {posts.items.length === 7 && <li><Link href="/blog"><i>More...</i></Link></li>}
    </ul>
  )


  return (
    <main className="w-11/12 h-full md:w-2/3 p-4 flex flex-col justify-start items-start content-between gap-5">
      <hr className="border-[#000000] w-full border-[1.5px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-4 md:gap-y-4">
        <div className="flex flex-col gap-4">
          {welcomeText && <Entry node={welcomeText as types.Block} />}
        </div>
        <div className="flex flex-col justify-start items-start gap-5 text-base">
          <h2 className="text-2xl font-bold">Blog</h2>
          <RecentPosts />
          <h2 className="font-bold">Donate</h2>
          <p>Whether you've learned something new from my videos, enjoyed my music or have strong opinions about my articles, you can support what I do by donating <a>Monero</a>.</p>
          <div className="h-11 overflow-hidden flex flex-row flex-nowrap w-full border-[1px] p-1 border-[#000000] border-solid items-center"><p className="text-[1.2rem] font-mono ">48dnPpGgo8WernVJp5VhvhaX3u9e46NujdYA44u8zuMdETNC5jXiA9S7JoYMM6qRt1ZcKpt1J3RZ3JPuMyXetmbHH7Mnc9C</p></div>
        </div>
      </div>
      <hr className="border-[#000000] w-full border-[1.5px]" />
      <p className="self-center">[<a>email</a>] ~ [<a>i2p</a>] ~ [<a>tor</a>] ~ [<a>xmpp</a>] </p>
      <div className="flex flex-row self-center justify-center items-center gap-2">
        <img src="/banporn.png" width={88} height={31} />
        <a className="!no-underline"><div className="border-double border-2 border-[#3f83d5] w-[88px] h-[31px] flex items-center justify-center"><p className="font-serif font-black text-[1.4rem] text-center">Denshi</p></div></a>
      </div>
    </main>
  );
}


{/* <img src="/placeholder-img.png" width={432} height={225} />
          <Image src={`https:${file.url}`} width={file.details.image.width} height={file.details.image.height} alt={file.fileName} /> */}
