import { EventHandler, MouseEventHandler } from "react"

const SideNavButton = ({ onClick, width, height, className }: { onClick: MouseEventHandler<HTMLButtonElement>, className?: string, width:string, height: string }) => {

  return (
    <button onClick={onClick} className={className}><svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z" /></svg></button>
  )
}

export { SideNavButton }