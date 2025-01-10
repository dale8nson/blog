"use client"
import { useId, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import * as types from "@contentful/rich-text-types"


const Entry = ({node}:{node: types.Block | types.Inline }) => {
  const { BLOCKS } = types
  console.log("node: ", node)

  return (
     <>
       {node.content.map(nd => {
        let id = nd.nodeType === BLOCKS.DOCUMENT ? nd.data.target.fields.id : useId()

          switch (nd.nodeType) {
      
            case BLOCKS.DOCUMENT:
              {
                return <div key={id} className="flex flex-col gap-4">{<Entry key={useId()} node={nd} />}</div>
              }
            case BLOCKS.HEADING_1:
              return <h1 className="h1" key={id}>{<Entry key={useId()} node={nd} />}</h1>
            case BLOCKS.HEADING_2:
              return <h2 className="h2" key={id}>{<Entry key={useId()} node={nd} />}</h2>
            case BLOCKS.HEADING_3:
              return <h3 key={id}>{<Entry key={useId()} node={nd} />}</h3>
            case BLOCKS.HEADING_4:
              return <h4 key={id}>{<Entry key={useId()} node={nd} />}</h4>
            case BLOCKS.HEADING_5:
              return <h5 key={id}>{<Entry key={useId()} node={nd} />}</h5>
            case BLOCKS.HEADING_6:
              return <h6 key={id}>{<Entry key={useId()} node={nd} />}</h6>
            case BLOCKS.PARAGRAPH:
              return <span key={id}>{<Entry key={useId()} node={nd} />}</span>
            case BLOCKS.UL_LIST:
              return <ul key={id}>{<Entry key={useId()} node={nd} />}</ul>
            case BLOCKS.OL_LIST:
              return <ol key={id}>{<Entry key={useId()} node={nd} />}</ol>
            case BLOCKS.LIST_ITEM:
              return <li key={id}><span>{<Entry key={useId()} node={nd} />}</span></li>
            case BLOCKS.HR:
              return <hr key={id} />
            case BLOCKS.QUOTE:
              return <q key={id}>{<Entry key={useId()} node={nd} />}</q>
            case BLOCKS.EMBEDDED_ENTRY:
              const { title, slug } = nd.data.target.fields
              return <Link key={useId()} href={`/blog/${slug}`}>{title}</Link>
            case BLOCKS.EMBEDDED_ASSET:
              {
                const { title } = nd.data.target.fields
                const { url, details } = nd.data.target.fields.file
                const { width, height } = details.image
      
                return <Suspense key={id} fallback={(
                  <div className={`w-${width} h-${height} bg-[#c4c4c4] animate-pulse`} />
                )}><div className="flex flex-row items-center justify-center w-full"><Image className="w-auto max-h-[50vh]" src={`https:${url}`} width={width} height={height} alt={title} /></div></Suspense>
              }
            case BLOCKS.TABLE:
              return <table key={id}>{<Entry key={useId()} node={nd} />}</table>
            case BLOCKS.TABLE_ROW:
              return <tr key={id}>{<Entry key={useId()} node={nd} />}</tr>
            case BLOCKS.TABLE_CELL:
              return <td key={id}>{<Entry key={useId()} node={nd} />}</td>
            case BLOCKS.TABLE_HEADER_CELL:
              return <th key={id}>{<Entry key={useId()} node={nd} />}</th>
            case "text":
              return <span key={id}>{nd.value + "\n"}</span>
            case "hyperlink":
              console.log("hyperlink: ", nd)
              return <span key={id}><Link href={nd.data.uri}>{<Entry key={useId()} node={nd} />}</Link></span>
          }
        })
      }
     </>
  )
}

export { Entry }