import Image from "next/image"

export const FetchedImage = async ({url, width, height, alt}:{url: string, width: number, height:number, alt:string}) => {
  const res = await fetch("http://localhost:3001/api/image?url=" + encodeURIComponent(url))
  const json = await res.json()
  console.log("res.text(): ", json)
  const {fileName} = json

  return <Image src={`/${fileName}`} width={width} height={height} alt={alt} quality={75} />
}