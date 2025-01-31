"use client"
import { usePathname } from "next/navigation"
import { Entry } from "./Entry"
import * as types from "@contentful/rich-text-types"
import Link from "next/link"
import { getDateString } from '../lib/utils'
import { BlogPostSkeleton, HomepageSkeleton, SiteSkeleton } from "@/types"
import * as contentful from "contentful"
import { BackButton } from "./BackButton"

const Header = ({ post, site, homepage, date }: { post?: contentful.Entry<BlogPostSkeleton>["fields"], site?: contentful.Entry<SiteSkeleton>["fields"], homepage?: contentful.Entry<HomepageSkeleton>["fields"], date?: string }) => {

  const pathname = usePathname()
  const title = site?.title
  const header = post?.header || homepage?.header || site?.defaultHeader || null

  if (header) return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black border-b-[1.5px] border-solid">
      <Entry node={header as types.Block} />
    </header>
  )

  if (post) {
    const dateStr = getDateString(post.date as string)
    return (
      <header className="flex flex-col w-11/12 md:w-2/3 items-start gap-2 mt-0 pt-2 pb-0 mb-2">
        <div className="border-black border-b-[1.5px] border-solid w-full" >
          <h1>{post.title as string}</h1>
          <p>{dateStr}</p>
        </div>
        <BackButton />
      </header>
    )
  }

  if (pathname === "/blog" && date) {
    return (
      <header className="w-11/12 gap-2 md:w-2/3 flex flex-col justify-center items-start my-4">
        <div className="border-black border-b-[1.5px] border-solid w-full">
          <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
          <p className="leading-5">{date}</p>
        </div>
        <BackButton />
      </header>
    )
  }

  return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black pb-4 border-b-[1.5px] max-h-[20vw] border-solid">
      <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
    </header>
  )
}

export { Header }