"use client"
import { use } from "react"
import { usePathname } from "next/navigation"
import { getPostBySlug, getSite, getHomepage, getPosts } from "@/lib/actions"
import { Entry } from "./Entry"
import * as types from "@contentful/rich-text-types"
import Link from "next/link"
import { getDateString } from '../lib/utils'
import { BlogPostSkeleton, SiteSkeleton } from "@/types"
import * as contentful from "contentful"

const Header = ({ post, site, date }: { post?: contentful.Entry<BlogPostSkeleton>["fields"], site?:contentful.Entry<SiteSkeleton>["fields"], date?: string }) => {

  const pathname = usePathname()
  const title  = site?.title
  const header = post?.header || site?.defaultHeader || null

  if (header) return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black border-b-2 border-solid">
      <Entry node={header as types.Block} />
    </header>
  )

  if (post) {
    const dateStr = getDateString(post.date as string)
    return (
      <header className="flex flex-col w-11/12 md:w-2/3 h-full items-start gap-2 my-4 py-2 border-black border-b-2 border-solid">
        <h1>{post.title as string}</h1>
        <p>{dateStr}</p>
      </header>
    )
  }

 if(pathname === "/blog" && date) {
  return (
    <header className="w-11/12 gap-2 md:w-2/3 flex flex-col justify-center items-start my-4 border-black pb-4 border-b-[1.5px] border-solid">
      <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
      <p className="leading-5">{date}</p>
    </header>
  )
 }

  return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black pb-4 border-b-[1.5px] border-solid">
      <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
    </header>
  )

}

export { Header }