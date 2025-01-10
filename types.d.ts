import * as contentful from "contentful"

const { EntryFieldTypes } = contentful

type SiteSkeleton = {
  contentTypeId: "site"
  fields: {
    title: EntryFieldTypes.Text
  }
}

type HomepageSkeleton = {
    contentTypeId: 'homepage'
    fields: {
      welcomeText: EntryFieldTypes.RichText
      images: EntryFieldTypes.AssetLink[]
    }
  }

  type BlogPostSkeleton = {
    contentTypeId: 'blogPost'
    fields: {
      title: EntryFieldTypes.Text
      slug: EntryFieldTypes.Text
      date: EntryFieldTypes.Date
      images: EntryFieldTypes.AssetLink[]
      body: EntryFieldTypes.RichText
    }
  }
