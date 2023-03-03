import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

import { Layout } from "@/components/layout"
import { Card } from "@/components/ui/Card"

export default function IndexPage({ results }) {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

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
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3">
        {console.log(results)}
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
