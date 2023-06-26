import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Mediflash Test",
  description: "Mediflash technical assessment",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/_Dav___",
    github: "https://github.com/Dav-sa/",
  },
}
