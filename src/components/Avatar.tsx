import Image from "next/image"

import { GRAVATAR_USERNAME_HASH } from "@/lib/constants"

export default function Avatar({
  size,
  className = "",
}: {
  size: number
  className: string
}) {
  return (
    <Image
      src={`https://www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=${
        size * 2
      }`}
      alt="Gravatar for Michael Barrett"
      height={size}
      width={size}
      className={`bg-gray-100 ${className}`}
      priority={true}
    />
  )
}
