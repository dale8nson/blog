"use client"
import { useState } from "react"
import { HamburgerButton } from "./HamburgerButton"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SideNavButton } from "./SideNavButton"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  useGSAP(() => {
    gsap.set("#overlay", {translateX: "-100%"})
  }, [])

  useGSAP(() => {
    if (menuOpen) {
      gsap.to("aside", { translateX: "0%", duration: 0.5 })
      gsap.set("#overlay", {translateX: "0%"})
      gsap.to("#overlay", {backgroundColor:"#00000099", duration:0.5})
      

    }
    else {
      gsap.to("aside", { translateX: "-100%", duration: 0.5 })
      gsap.to("#overlay", {backgroundColor: "#00000000", duration:0.5})
      gsap.set("#overlay", {translateX: "-100%"})
  }
  }, [menuOpen])


  return (
    <section className="flex flex-col !justify-start items-center">
      <nav className="flex flex-row gap-4 items-start w-screen p-4">
        <HamburgerButton onClick={() => { setMenuOpen(true) }} className="md:hidden" />
      </nav>
      <div id="overlay" className="fixed z-10 top-0 left-0 bg-black bg-opacity-60 h-screen w-screen -translate-x-[100%] md:hidden" onClick={() => setMenuOpen(false)} /> 
        <div id="rail-menu" className="fixed bg-white z-[60] top-0 left-0 hidden h-screen w-[5%] drop-shadow-xl border-solid border-2 md:flex md:flex-col items-center gap-4 p-2">
        <SideNavButton onClick={() => setMenuOpen(!menuOpen)} className="" width="46px" height="46px" />
        </div>
        <aside className="fixed top-0 left-0 md:left-[4.55rem] z-20 flex flex-col min-h-screen items-start w-1/2 md:w-1/6 md:pr-8 -translate-x-[100%] bg-white text-base drop-shadow-lg gap-3 py-5 pl-3 pr-8 md:pl-4 ">
        <h1 className="font-bold text-lg">MENU</h1>
        <button className="">
          Site Settings
        </button>
        <button className="">
          Header
        </button>
        <button className="">
          Footer
        </button>
        <h2 className="!text-base font-bold">PAGES</h2>
        <button className="">
          Home
        </button>
        <button className="">
          Posts
        </button>
      </aside>
    </section>
  )
}

export { NavBar }