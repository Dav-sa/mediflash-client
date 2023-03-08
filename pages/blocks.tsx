import Head from "next/head"
import fetchBlock from "@/hooks/fetchBlocks"
import { useQuery } from "@tanstack/react-query"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  const { data, isLoading, isError } = useQuery(["blocks"], fetchBlock)

  if (isLoading) return "Loading..."

  if (isError) return `An error has occurred`

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
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:py-10 md:grid-cols-2">
        <div className="my-2 flex rounded-lg md:justify-center border-2 border-solid border-slate-200 p-4">
          <p className="">Gas price is :</p>
          <p className="mx-2 font-semibold hover:text-sky-300">
            {data.gasPrice} ETH
          </p>
        </div>
        <div className="flex rounded-lg border-2 md:justify-center border-solid border-slate-200 p-4">
          <p>Latest block number :</p>
          <p className="mx-2 font-semibold hover:text-sky-300">
            {data.blockNumber}
          </p>
        </div>
      </section>
    </Layout>
  )
}
