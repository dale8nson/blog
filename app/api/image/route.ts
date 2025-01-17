import { NextRequest, NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"

export const GET = async (req: NextRequest) => {


  const url = decodeURIComponent(req.nextUrl.searchParams.get("url") as string)
  const p = path.parse(url)
  const fileName = p.name + p.ext
  if (!url) throw new Error("url missing")
  console.log("url: ", url)

  console.log("fileName: ", fileName)

  let fh: fs.FileHandle
  try {
    fh = await fs.open(process.cwd() + "/public/" + fileName as string, "wx")
  } catch {
    return NextResponse.json({fileName})
  }

  const res = await fetch(url)
  const arr = await res.bytes()
  const os = fh.createWriteStream()
  // for(let i = 0; i < arr.byteLength; i++) {
  //   os.write(arr[i])
  // }
  os.write(arr)
  await fh.close()
  os.close()

  return NextResponse.json({ fileName })
}
