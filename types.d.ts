import * as contentful from "contentful"

declare module "react-draft-wysiwyg"

type HomepageSkeleton = {
    contentTypeId: 'homepage'
    fields: {
      welcomeText: contentful.EntryFieldTypes.RichText
      images: contentful.EntryFieldTypes.AssetLink
    }
  }