import Head from "next/head"
import { useQuery } from "react-query"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["coinprices"],
    queryFn: () =>
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false
      `).then((res) => res.json()),
  })

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <Layout>
      <Head>
        <title>Chainxplorer</title>
        <meta
          name="description"
          content="Chainxplorer gives you the latest informations about crypto prices, ethereum blocks, and addresses content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        {console.log(data)}
      </section>
    </Layout>
  )
}
