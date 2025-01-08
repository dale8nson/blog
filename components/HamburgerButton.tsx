"use client"
import { MouseEventHandler } from "react";

const HamburgerButton = ({onClick, className}:{onClick:MouseEventHandler, className?: string}) => {
  
  return (
    <button className={`self-center self-justify-center ${className}`} onClick={onClick}>
      <svg
        className="w-16 h-8 md:hidden"
        fill="black"
        stroke="black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/" >
          <rect x="1" y="5" width="19" height="1.5" rx="1" />
          <rect x="1" y="12" width="19" height="1.5" rx="1" />
          <rect x="1" y="19" width="19" height="1.5" rx="1" />
        </svg>
    </button>
  );
}

export { HamburgerButton }