import { EntryFieldTypes } from "contentful"

type SiteSkeleton = {
  contentTypeId: "site"
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    publisher: EntryFieldTypes.Text
    authors: EntryFieldTypes.Array<EntryFieldTypes.Text>
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Text>
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
      authors: EntryFieldTypes.Array<EntryFieldTypes.Text>
      date: EntryFieldTypes.Date
      body: EntryFieldTypes.RichText
      footer: EntryFieldTypes.RichText
      keywords: EntryFieldTypes.Array<EntryFieldTypes.Text>
    }
  }

  type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
