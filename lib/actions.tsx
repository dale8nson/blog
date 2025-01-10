"use server"
import { BlogPostSkeleton, HomepageSkeleton, SiteSkeleton } from "@/types"
import * as contentful from "contentful"

const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

export const getClient: () => Promise<contentful.ContentfulClientApi<undefined>> = async () => client

export const getPosts = async () => {
  const entries = await client.getEntries<BlogPostSkeleton>({content_type:"blogPost"})
  if (entries) return entries.items
  throw Error("No blog posts found")
}

export const getPostBySlug = async (slug: string) => {
  const entries = await client.getEntries<BlogPostSkeleton>({content_type:"blogPost", "fields.slug[match]": slug})
  if(entries) return entries.items[0].fields
  throw Error("Blog post not found")
}

export const getSite = async () => {
  const entries = await client.getEntries<SiteSkeleton>({content_type:"site"})
  if(entries) return entries.items[0].fields
  throw Error("Site data not found")
}

export const getHomepage = async () => {
  const entries = await client.getEntries<HomepageSkeleton>({content_type:"homepage"})
  if(entries) return entries.items[0].fields
  throw Error("Homepage not found")
}

