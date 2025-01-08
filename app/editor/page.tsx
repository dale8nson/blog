"use client"
import { Editor } from "primereact/editor"
import { useState } from "react"


export default function EditorPage () {
  const [text, setText] = useState("")
  return (
    <form className="grid grid-cols-[1fr_7fr_1fr_7fr] gap-4 h-full w-full md:ml-6">
    <label className="text-2xl" htmlFor="#title" >Title:</label>
    <input id="title" className="border-solid border-[1.5px] p-2" placeholder="Post title" type="text" />
    <Editor value={text} onTextChange={(e) => setText(e.htmlValue as string)} className="col-span-4 w-[80vw] h-[70vh]" />
      <button className="self-end col-span-4">Post</button>
    </form>
  )
}