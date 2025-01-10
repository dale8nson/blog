import * as contentful from "contentful"

const { EntryFieldTypes } = contentful

type SiteSkeleton = {
  contentTypeId: "site"
  fields: {
    defaultHeader: EntryFieldTypes.RichText
    title: EntryFieldTypes.Text
    defaultFooter: EntryFieldTypes.RichText
  }
}

type HomepageSkeleton = {
    contentTypeId: 'homepage'
    fields: {
      header: EntryFieldTypes.RichText
      welcomeText: EntryFieldTypes.RichText
      rightSideContent: EntryFieldTypes.RichText
      footer: EntryFieldTypes.RichText
      images: EntryFieldTypes.AssetLink[]
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
