import { getPostBySlug, getSite, getHomepage } from "@/lib/actions"
import { Entry } from "./Entry"
import * as types from "@contentful/rich-text-types"
import Link from "next/link"
import { getDateString } from '../lib/utils'

const Header = async ({ slug }: { slug?: string }) => {
  const post = slug ? await getPostBySlug(slug) : null
  const site = await getSite()
  const { title } = site

  const header = post?.header || site.defaultHeader || null

  if (header) return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black border-b-2 border-solid">
      <Entry node={header as types.Block} />
    </header>
  )

  if (post && slug) {
    const dateStr = getDateString(post.date as string)
    return (
      <header className="flex flex-col w-2/3 h-full items-start gap-2 py-2 border-black border-b-2 border-solid">
        <h1>{title as string}</h1>
        <p>{dateStr}</p>
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