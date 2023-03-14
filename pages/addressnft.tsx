import { useState } from "react"
import Head from "next/head"

import { alchemy } from "@/lib/alchemy"
import { NftCard } from "@/components/NftCard"
import { NftSearch } from "@/components/NftSearch"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [input, setInput] = useState<string>("0x...")
  const [results, setResults] = useState(null)
  const searchHandler = async () => {
    const NftForAddress = await alchemy.nft.getNftsForOwner(input)
    setResults(NftForAddress)
  }
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
      <section className="container flex  flex-col items-center justify-center pt-6 pb-8 md:grid-cols-2 md:py-10">
        <NftSearch
          setInput={setInput}
          searchHandler={searchHandler}
        ></NftSearch>
        {results &&
          results.ownedNfts.map((nft) => (
            <NftCard
              id={nft.tokenId}
              name={nft.contract.name}
              symbol={nft.contract.symbol}
              image={nft.contract.openSea.imageUrl}
              contract_address={nft.contract.address}
            ></NftCard>
          ))}
      </section>
    </Layout>
  )
}
