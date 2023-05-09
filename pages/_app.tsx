import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter as FontSans } from "@next/font/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import "regenerator-runtime/runtime"
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const queryClient = new QueryClient()
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ClerkProvider
        {...pageProps}
        frontendApi={clerkFrontendApi}
        navigate={(to) => router.push(to)}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </>
  )
}
