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
    <header className="w-11/12 md:w-2/3 flex flex-row justify-start items-center my-4 border-black border-t-2 border-solid">
      <Entry node={footer as types.Block} />
    </header>
  )

  return (
    <footer className="w-11/12 max-h-[20vw] md:w-2/3 flex flex-row flex-grow-0 justify-start items-start my-4 border-black border-t-2 mt-6 border-solid pt-4">
      <p>© {new Date().getFullYear()} {title as string}. All rights reserved.</p>
    </footer>
  )

}

export { Footer }