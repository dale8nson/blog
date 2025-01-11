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
      <Header site={site} homepage={homepage} />
      <main className="w-11/12 md:w-2/3 flex flex-col justify-start items-start gap-5 md:overflow-y-scroll md:overflow-x-hidden h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 [grid-auto-rows:min-content] gap-4 md:gap-x-4 md:gap-y-4 md:max-h-full ">
          <div className="flex flex-col gap-4 justify-items-start flex-grow-0 flex-shrink h-fit">
            {leftSideContent && <Entry node={leftSideContent as types.Block} />}
          </div>
          <div className="flex flex-col flex-shrink justify-items-start gap-5 text-base md:grid md:grid-rows-2 h-fit flex-grow-0">
            <div className="flex flex-col justify-start items-start h-full">
              <Link className="!no-underline " href="/blog"><h2 className="text-black hover:!underline hover:!decoration-black">Blog</h2></Link>
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