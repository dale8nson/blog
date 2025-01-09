import { use } from "react"
import { NavBar } from "@/components/NavBar";
import { ReactNode } from "react";
import { useCMS } from "@/lib/hooks/useCMS";

export default async function Layout({ children }: { children: ReactNode }) {
  const client = useCMS()
  const entries = await client.getEntries()
  console.log("entries")
  console.log("entries: ", entries)

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center bg-white text-black m-0 font-sans">
      <NavBar />
      <div className="flex flex-col gap-8">
        <main className="w-full p-2">
          {children}
        </main>
      </div>
    </div>
  )
}