
import { useEffect, useState } from "react";
import * as contentful from "contentful";

const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

export const useCMS = () => {
  // const[ client, setClient] = useState<contentful.ContentfulClientApi<undefined>>()

   
  // useEffect(() => {
    
  //   setClient(contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string}))

  // },[])

  return client
}