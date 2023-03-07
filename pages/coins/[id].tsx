import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

import { Layout } from "@/components/layout"
import { DetailedCard } from "@/components/ui/DetailedCard"

export default function IndexPage({ results }) {
  const router = useRouter()
  const { id } = router.query

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
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8  md:py-10 ">
        <DetailedCard
          id={results.id}
          name={results.name}
          ath={results.market_data.ath.usd}
          current_price={results.market_data.current_price.usd}
          image={results.image.small}
          max_supply={results.market_data.max_supply}
          circulating_supply={results.market_data.circulating_supply}
          commit_four_weeks={results.developer_data.commit_count_4_weeks}
          stars={results.developer_data.stars}
          total_issues={results.developer_data.total_issues}
          pr_merged={results.developer_data.pull_requests_merged}
          pr_contributors={results.developer_data.pull_request_contributors}
          description={results.description.en}
        ></DetailedCard>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
      `)
  const results = await res.json()
  return { props: { results } }
}
