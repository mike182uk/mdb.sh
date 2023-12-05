import { SITE_URL } from "@/lib/constants"

export default function RobotsTxt() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    host: SITE_URL,
  }
}
