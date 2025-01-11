"use server"
import { BlogPostSkeleton, HomepageSkeleton, SiteSkeleton } from "@/types"
import * as contentful from "contentful"
import fs from "node:fs/promises"
import sharp from "sharp"
import ico from "sharp-ico"

const client = contentful.createClient({ accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string })

export const getClient: () => Promise<contentful.ContentfulClientApi<undefined>> = async () => client

export const getPosts = async () => {
  const entries = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost" })
  if (entries) {
    const sortedPosts = entries.items.sort((a, b) => {
      const d1 = new Date(a.fields.date as string)
      const d2 = new Date(b.fields.date as string)
      return d1 > d2 ? -1 : d1 < d2 ? 1 : 0
    })
    return sortedPosts
  }
  throw Error("No blog posts found")
}

export const getPostBySlug = async (slug: string) => {
  const entries = await client.getEntries<BlogPostSkeleton>({ content_type: "blogPost", "fields.slug[match]": slug })
  if (entries) return entries.items[0].fields
  throw Error("Blog post not found")
}

export const getSite = async () => {
  const entries = await client.getEntries<SiteSkeleton>({ content_type: "site" })
  if (entries) return entries.items?.[0].fields
  throw Error("Site data not found")
}

export const getHomepage = async () => {
  const entries = await client.getEntries<HomepageSkeleton>({ content_type: "homepage" })
  if (entries) return entries.items[0].fields
  throw Error("Homepage not found")
}

export const loadFavicon = async () => {
  const site = await getSite()
  const { favicon } = site
  const { url, fileName } = (favicon as any)?.fields.file

  const res = await fetch(`https:${url}`)
  const blob = await res.blob()
  const bytes = await blob.bytes()
  const fileHandle = await fs.open(process.cwd() + "/public/" + fileName, "w+")
  await fileHandle.writeFile(bytes)
  await fileHandle.close()

  await ico.sharpsToIco([sharp(process.cwd() + "/public/" + fileName)], process.cwd() + "/app/" + "favicon.ico")
}