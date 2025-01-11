import { useId } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as types from "@contentful/rich-text-types"
import Image from "next/image"
import Link from "next/link"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function printNode(node: types.Block) {
  let str: string = ""
  try {
    for (const [k, v] of Object.entries(node)) {
      str += `${k}: \n`
      if (v.length) {
        str += "[\n"
        for (const n of v) {
          str += printNode(v)
        }
        str += "]\n"
      } else if (typeof v === "object") {
        str += "{\n"
        str += printNode(v)
        str += "}\n"
      } else {
        str += v
        return str
      }
    }
  } catch {
    return str
  }
}

export function parse(node: types.Block | types.Inline) {

  const { BLOCKS } = types
  return node.content.map(nd => {

    let id = nd.nodeType === BLOCKS.DOCUMENT ? nd.data.target.fields.id : crypto.randomUUID()

    switch (nd.nodeType) {

      case BLOCKS.DOCUMENT:
        {
          return <div key={id} className="flex flex-col gap-4">{parse(nd)}</div>
        }
      case BLOCKS.HEADING_1:
        return <h1 className="h1" key={id}>{parse(nd)}</h1>
      case BLOCKS.HEADING_2:
        return <h2 className="h2" key={id}>{parse(nd)}</h2>
      case BLOCKS.HEADING_3:
        return <h3 key={id}>{parse(nd)}</h3>
      case BLOCKS.HEADING_4:
        return <h4 key={id}>{parse(nd)}</h4>
      case BLOCKS.HEADING_5:
        return <h5 key={id}>{parse(nd)}</h5>
      case BLOCKS.HEADING_6:
        return <h6 key={id}>{parse(nd)}</h6>
      case BLOCKS.PARAGRAPH:
        return <span key={id}>{parse(nd)}</span>
      case BLOCKS.UL_LIST:
        return <ul key={id}>{parse(nd)}</ul>
      case BLOCKS.OL_LIST:
        return <ol key={id}>{parse(nd)}</ol>
      case BLOCKS.LIST_ITEM:
        return <li key={id}><span>{parse(nd)}</span></li>
      case BLOCKS.HR:
        return <hr key={id} />
      case BLOCKS.QUOTE:
        return <q key={id}>{parse(nd)}</q>
      case BLOCKS.EMBEDDED_ENTRY:
        const { title, slug } = nd.data.target.fields
        return <Link href={`/blog/${slug}`}>{title}</Link>
      case BLOCKS.EMBEDDED_ASSET:
        {
          const { title } = nd.data.target.fields
          const { url, details } = nd.data.target.fields.file
          const { width, height } = details.image

          return <Image key={id} src={`https:${url}`} width={width} height={height} alt={title} />
        }
      case BLOCKS.TABLE:
        return <table key={id}>{parse(nd)}</table>
      case BLOCKS.TABLE_ROW:
        return <tr key={id}>{parse(nd)}</tr>
      case BLOCKS.TABLE_CELL:
        return <td key={id}>{parse(nd)}</td>
      case BLOCKS.TABLE_HEADER_CELL:
        return <th key={id}>{parse(nd)}</th>
      case "text":
        return <span>{nd.value + "\n"}</span>
      case "hyperlink":
        return <span><Link key={id} href={nd.data.uri}>{parse(nd)}</Link></span>
    }
  })
}

export const getDateString = (date: string) => new Intl.DateTimeFormat("en-US", { dateStyle:"long" }).format(new Date(date))

