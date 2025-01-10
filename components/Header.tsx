import * as contentful from "contentful"
import { getPostBySlug, getSite, getHomepage } from "@/lib/actions"
import { Entry } from "./Entry"
import * as types from "@contentful/rich-text-types"
import Link from "next/link"


const Header = async ({ slug }: { slug?: string }) => {
  const post = slug ? await getPostBySlug(slug) : null
  const site = await getSite()
  const { title } = site
  const header = post?.header || site.defaultHeader || null

  if (header) return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
      <Entry node={header as types.Block} />
    </header>
  )

  return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
      <Link className="!no-underline" href="/"><h1 className="font-bold text-black ">{title as string}</h1></Link>
    </header>
  )

}

export { Header }