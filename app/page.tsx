import Image from "next/image";
import { useCMS } from "@/lib/hooks/useCMS";
import * as contentful from "contentful"
import { HomepageSkeleton } from "@/types";
import * as types from "@contentful/rich-text-types"
import { parse } from "@/lib/utils"
import { Entry } from "@/components/Entry";

export default async function Home() {
  const client = useCMS()

  // type HomepageSkeleton = {
  //   contentTypeId: 'homepage'
  //   fields: {
  //     welcomeText: contentful.EntryFieldTypes.RichText
  //     images: contentful.EntryFieldTypes.AssetLink
  //   }
  // }

  console.log("client: ", client)
  // const types = await client.getContentTypes()
  // console.log("contenTypes:", types.items)
  // const entries = await client.getEntries({content_type:"blogPost"})
  // console.log("entries.items: ", entries.items)
  // const file = entries.items[0].fields.body?.content[2].data.target.fields.file
  const homepage = await client.getEntries<HomepageSkeleton>({ content_type: "homepage" })
  console.log("homepage.items: ", homepage.items)
  const id = homepage.items[0].sys.id
  const entry = await client.getEntry<HomepageSkeleton>(id)
  console.log("entry: ", entry)
  const { fields } = entry
  console.log("fields: ", fields)
  const { welcomeText } = fields
  console.log("welcomeText: ", welcomeText)
  const { content } = welcomeText
  console.log("content: ", content)

  const {BLOCKS} = types
  const eeb = content.find(n => n.nodeType === BLOCKS.EMBEDDED_ENTRY)
  console.log("eeb.data.target.fields: ", eeb?.data.target.fields)
  // console.log("items: ", items)

  // const fields = items 
  // const intro = fields 
  // as contentful.EntryCollection<contentful.EntrySkeleton, contentful.Modifiers, contentful.Locales>
  // console.log("intro: ", intro)

  return (
    <main className="w-11/12 h-full md:w-2/3 p-4 flex flex-col justify-start items-start content-between gap-5">
      <hr className="border-[#000000] w-full border-[1.5px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
        <div className="flex flex-col gap-4">
          <Entry node={welcomeText} />
        </div>
        <div className="flex flex-col justify-start items-start gap-5 text-base">
          <h2 className="text-2xl font-bold">Blog</h2>
          <ul>
            <li>24/12/24 - The Downfall of Alternative Frontends</li>
            <li>17/11/24 - <a>Why I Wrote Galaxy Garner</a></li>
            <li>20/01/24 - <a>18 Rules Over Technology</a></li>
            <li>19/11/23 - <a>Are You Still With Me?</a></li>
            <li>10/09/23 - <a>Every Chat Client Absolutely Sucks.</a></li>
            <li>01/07/23 - <a>Say No to Self-Deprecating Humor</a></li>
            <li>05/06/23 - <a>EasyPeasy Way to Quit Pornography</a></li>
            <li><a href="/blog"><i>More...</i></a></li>
          </ul>
          <h2 className="font-bold">Donate</h2>
          <p>Whether you’ve learned something new from my videos, enjoyed my music or have strong opinions about my articles, you can support what I do by donating <a>Monero</a>.</p>
          <div className="h-11 overflow-hidden flex flex-row flex-nowrap w-full border-[1px] p-1 border-[#000000] border-solid items-center"><p className="text-[1.2rem] font-mono ">48dnPpGgo8WernVJp5VhvhaX3u9e46NujdYA44u8zuMdETNC5jXiA9S7JoYMM6qRt1ZcKpt1J3RZ3JPuMyXetmbHH7Mnc9C</p></div>
        </div>
      </div>
      <hr className="border-[#000000] w-full border-[1.5px]" />
      <p className="self-center">[<a>email</a>] ~ [<a>i2p</a>] ~ [<a>tor</a>] ~ [<a>xmpp</a>] </p>
      <div className="flex flex-row self-center justify-center items-center gap-2">
        <img src="/banporn.png" width={88} height={31} />
        <a className="!no-underline"><div className="border-double border-2 border-[#3f83d5] w-[88px] h-[31px] flex items-center justify-center"><p className="font-serif font-black text-[1.4rem] text-center">Denshi</p></div></a>
      </div>
    </main>
  );
}


{/* <img src="/placeholder-img.png" width={432} height={225} />
          <Image src={`https:${file.url}`} width={file.details.image.width} height={file.details.image.height} alt={file.fileName} /> */}
