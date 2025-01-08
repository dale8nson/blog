"use client"
import { Editor } from "primereact/editor"
import { useState } from "react"
import { DatePicker } from "@/components/DatePicker"


export default function EditorPage () {
  const [text, setText] = useState("")
  return (
    <form className="grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_8fr_1fr_8fr] gap-4 h-full w-full relative md:translate-x-32 items-center">
    <label className="text-2xl" htmlFor="#title" >Title:</label>
    <input id="title" className="border-solid border-[1.5px] p-2" placeholder="Post title" type="text" />
    <label htmlFor="date-picker" className="text-2xl">Date:</label>
    <DatePicker id="date-picker" />
    <Editor value={text} onTextChange={(e) => setText(e.htmlValue as string)} className="col-span-2 md:col-span-4 md:w-[80vw] h-[65vh]" />
      <button className="md:col-start-4">Post</button>
    </form>
  )
}