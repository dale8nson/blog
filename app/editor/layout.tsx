import { NavBar } from "@/components/NavBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center bg-white text-black m-0 font-sans">
      <NavBar />
      <div className="flex flex-row gap-8">

        <main className="w-full p-4">
          {children}
        </main>
      </div>
    </div>
  )
}