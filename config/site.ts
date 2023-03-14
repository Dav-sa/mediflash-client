import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Chainxplorer",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Prices",
      href: "/",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "NFTChecker",
      href: "/addressnft",
    },
    {
      title: "CoinChecker",
      href: "/addresscoin",
    },
  ],
  links: {
    twitter: "https://twitter.com/_Dav___",
    github: "https://github.com/Dav-sa/Chainxplorer",
    docs: "https://ui.shadcn.com",
  },
}
