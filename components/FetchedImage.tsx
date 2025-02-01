import Image from "next/image"
import { generateImageSourceSet } from "@/lib/actions"

export const FetchedImage = async ({url, width, height, alt}:{url: string, width: number, height:number, alt:string}) => {
  // const res = await fetch("http://localhost:3001/api/image?url=" + encodeURIComponent(url))
  // const json = await res.json()
  // console.log("res.text(): ", json)
  // const {fileName} = json

  console.log("url: ", url)

  const srcSet = await generateImageSourceSet(url)
  console.log("srcSet: ", srcSet)

  return <img srcSet={srcSet}  width={width} height={height} alt={alt} />
}
