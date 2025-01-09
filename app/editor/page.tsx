"use client"
import { Editor } from "primereact/editor"
import { useState } from "react"


export default function EditorPage () {
  const [text, setText] = useState("")
  return (
    <form className="grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_8fr_1fr_4fr] gap-y-8 gap-x-4 h-full w-full relative md:translate-x-10 items-center"> 
    <label className="text-2xl" htmlFor="#title" >Title:</label>
    <input id="title" className="border-solid border-[1.5px] p-2" placeholder="Post title" type="text" />
    <label htmlFor="date-picker" className="text-2xl">Date:</label>
    <Editor value={text} onTextChange={(e) => setText(e.htmlValue as string)} className="col-span-2 md:col-span-4 md:w-[80vw] h-[65vh]" />
    <button className="md:col-start-4 m-4 self-end text-white bg-black rounded-3xl px-4 py-2 w-1/2">Post</button>
    </form>
  )
}