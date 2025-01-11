import { useCMS } from "@/lib/hooks/useCMS";
import * as contentful from "contentful"
import { BlogPostSkeleton, HomepageSkeleton } from "@/types";
import * as types from "@contentful/rich-text-types"
import { Entry } from "@/components/Entry";
import { getHomepage, getSite } from "@/lib/actions";
import { Header } from "@/components/Header";
import { RecentPosts } from "@/components/RecentPosts";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const revalidate = 60

export default async function Home() {

  const site = await getSite()
  const homepage = await getHomepage()
  const { leftSideContent, rightSideContent } = homepage

  return (
    <>
      <Header site={site} />
      <main className="w-11/12 min-h-[70vh] md:w-2/3 flex flex-col  justify-start items-start content-between gap-5 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-4 md:gap-y-4">
          <div className="flex flex-col gap-4 justify-items-center h-full">
            {leftSideContent && <Entry node={leftSideContent as types.Block} />}
          </div>
          <div className="flex flex-col justify-items-center gap-5 text-base md:grid md:grid-rows-2 h-full">
            <div className="flex flex-col justify-start items-start h-full">
              <Link className="!no-underline" href="/blog"><h2 className="text-black">Blog</h2></Link>
              <RecentPosts />
            </div>
            <div className="flex flex-col justify-start items-start h-full">{rightSideContent && <Entry node={rightSideContent as types.Block} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


{/* <img src="/placeholder-img.png" width={432} height={225} />
          <Image src={`https:${file.url}`} width={file.details.image.width} height={file.details.image.height} alt={file.fileName} /> */}


{/* <hr className="border-[#000000] w-full border-[1.5px]" /> */ }
{/* <p className="self-center">[<a>email</a>] ~ [<a>i2p</a>] ~ [<a>tor</a>] ~ [<a>xmpp</a>] </p>
        <div className="flex flex-row self-center justify-center items-center gap-2">
          <img src="/banporn.png" width={88} height={31} />
          <a className="!no-underline"><div className="border-double border-2 border-[#3f83d5] w-[88px] h-[31px] flex items-center justify-center"><p className="font-serif font-black text-[1.4rem] text-center">Denshi</p></div></a>
        </div> */}


{/* <h2 className="font-bold">Donate</h2>
            <p>Whether you've learned something new from my videos, enjoyed my music or have strong opinions about my articles, you can support what I do by donating <a>Monero</a>.</p>
            <div className="h-11 overflow-hidden flex flex-row flex-nowrap w-full border-[1px] p-1 border-[#000000] border-solid items-center"><p className="text-[1.2rem] font-mono ">48dnPpGgo8WernVJp5VhvhaX3u9e46NujdYA44u8zuMdETNC5jXiA9S7JoYMM6qRt1ZcKpt1J3RZ3JPuMyXetmbHH7Mnc9C</p></div>
          </div> */}