import * as contentful from "contentful"

const { EntryFieldTypes } = contentful

type SiteSkeleton = {
  contentTypeId: "site"
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    keywords: EntryFieldTypes.Text[]
    favicon: EntryFieldTypes.AssetLink
    defaultHeader: EntryFieldTypes.RichText
    defaultFooter: EntryFieldTypes.RichText
  }
}

type HomepageSkeleton = {
    contentTypeId: 'homepage'
    fields: {
      header: EntryFieldTypes.RichText
      leftSideContent: EntryFieldTypes.RichText
      rightSideContent: EntryFieldTypes.RichText
      footer: EntryFieldTypes.RichText
      images: EntryFieldTypes.AssetLink[]
    }
  }

  type PostListSkeleton = {
    contentTypeId: 'postList'
    fields: {
      preListContent: EntryFieldTypes.RichText
    }
  }

  type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: {
      header: EntryFieldTypes.RichText
      title: EntryFieldTypes.Text
      slug: EntryFieldTypes.Text
      date: EntryFieldTypes.Date
      body: EntryFieldTypes.RichText
      footer: EntryFieldTypes.RichText
      images: EntryFieldTypes.AssetLink[]
    }
  }

  type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
