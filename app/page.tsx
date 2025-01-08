import Image from "next/image";

export default function Home() {
  return (
    <main className="w-11/12 md:w-2/3 flex flex-col justify-start items-start content-between gap-5">
      <h1 className="font-bold text-[2.5rem]">YourSite</h1>
      <hr className="border-[#fafafa] w-full border-[1.5px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
        <div className="flex flex-col gap-4">
          <img src="/placeholder-img.png" width={432} height={225} />
          <p className="text-base">Hi, I'm &lt;your-name&gt;. I'm responsible for:</p>
          <ul className="  ">
            <li><a href="#">link 1</a>, my video channel.</li>
            <li><a href="#">link 2</a>, my open-source text guide platform.</li>
            <li><a href="#">link 4</a>, my band, also found on <a href="https://bandcamp.org">Bandcamp.</a></li>
          </ul>
          <p>Regardless of how you found me, welcome. This is my personal website, home to my <a href="#">blog</a>.</p>
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
            <li><a><i>More...</i></a></li>
          </ul>
          <h2 className="font-bold">Donate</h2>
          <p>Whether you’ve learned something new from my videos, enjoyed my music or have strong opinions about my articles, you can support what I do by donating <a>Monero</a>.</p>
        <div className="h-11 overflow-hidden flex flex-row flex-nowrap w-full border-[1px] p-1 border-[#fafafa] border-solid items-center"><p className="text-[1.2rem] font-mono ">48dnPpGgo8WernVJp5VhvhaX3u9e46NujdYA44u8zuMdETNC5jXiA9S7JoYMM6qRt1ZcKpt1J3RZ3JPuMyXetmbHH7Mnc9C</p></div>
        </div>
      </div>
      <hr className="border-[#fafafa] w-full border-[1.5px]" />
      <p className="self-center">[<a>email</a>] ~ [<a>i2p</a>] ~ [<a>tor</a>] ~ [<a>xmpp</a>] </p>
      <div className="flex flex-row self-center justify-center items-center gap-2">
        <img src="/banporn.png" width={88} height={31} />
        <a className="!no-underline"><div className="border-double border-2 border-[#3f83d5] w-[88px] h-[31px] flex items-center justify-center"><p className="font-serif font-black text-[1.4rem] text-center">Denshi</p></div></a>
      </div>
    </main>
  );
}
