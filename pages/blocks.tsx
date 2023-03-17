import { useState } from "react"
import Head from "next/head"
import fetchBlock from "@/hooks/fetchBlocks"
import { useQuery } from "@tanstack/react-query"

import { alchemy } from "@/lib/alchemy"
import { BlockDetail } from "@/components/BlockDetail"
import { BlockSearch } from "@/components/BlockSearch"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [input, setInput] = useState<number>(0)
  const [results, setResults] = useState(null)
  const searchHandler = async () => {
    const blockWithTransactions = await alchemy.core.getBlockWithTransactions(
      input
    )
    setResults(blockWithTransactions)
  }
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
      <section className="container flex flex-col items-center justify-center pt-6 pb-8 md:grid-cols-2 md:py-10">
        <BlockSearch
          setInput={setInput}
          searchHandler={searchHandler}
        ></BlockSearch>
        <div className="my-2 mb-4 flex max-w-max text-left rounded-lg border-2 border-solid min-w-[402px]  border-slate-200 p-4 px-7 ">
          <p className="">Gas price :</p>
          <p className="md:px-18 mx-2 font-semibold hover:text-sky-300">
            {data.gasPrice} ETH
          </p>
        </div>
        <div className="my-2 mb-4 flex min-w-[402px] text-left  rounded-lg border-2 border-solid border-slate-200 p-4 px-7 ">
          <p className="">Latest block number :</p>
          <p className="mx-2 font-semibold hover:text-sky-300">
            {data.blockNumber}
          </p>
        </div>

        <BlockDetail title={"Latest block"} data={data}></BlockDetail>
        {results && (
          <BlockDetail
            title={`Info about block ${results.number}`}
            data={{ blockWithTransactions: results }}
          />
        )}
      </section>
    </Layout>
  )
}
