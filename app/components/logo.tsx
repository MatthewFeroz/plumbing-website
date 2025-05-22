import Image from "next/image"
import Link from "next/link"

export function Logo({ size = "default" }) {
  const dimensions = size === "large" ? { width: 70, height: 70 } : { width: 50, height: 50 }

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt="R&M Plumbing & Heating"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
      />
      <span className={`font-bold ${size === "large" ? "text-2xl" : "text-xl"}`}>R&M Plumbing & Heating</span>
    </Link>
  )
}
