import * as contentful from "contentful"
import { getPostBySlug, getSite, getHomepage } from "@/lib/actions"
import { Entry } from "./Entry"
import * as types from "@contentful/rich-text-types"


const Footer = async ({ slug }: { slug?: string }) => {
  const post = slug ? await getPostBySlug(slug) : null
  const site = await getSite()
  const { title } = site
  const footer = post?.footer || site.defaultFooter || null

  if (footer) return (
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
      <Entry node={footer as types.Block} />
    </header>
  )

  return (
    <footer className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4">
      <p>© {new Date().getFullYear()} {title as string}. All rights reserved.</p>
    </footer>
  )

}

export { Footer }