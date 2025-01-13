"use client"
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()

  return (
    <button className="text-[#3f81d2] underline self-start" onClick={() => router.back()} >[⟵ Back]</button>
  )
}

export { BackButton }