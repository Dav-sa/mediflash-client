import { useState } from "react"
import Head from "next/head"

import { alchemy } from "@/lib/alchemy"
import { Error } from "@/components/Error"
import { NftCard } from "@/components/NftCard"
import { NftSearch } from "@/components/NftSearch"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [error, setError] = useState(false)
  const [input, setInput] = useState<string>("0x...")
  const [results, setResults] = useState(null)
  const searchHandler = async () => {
    setError(false)
    try {
      const NftForAddress = await alchemy.nft.getNftsForOwner(input)
      setResults(NftForAddress)
    } catch (error) {
      setError(true)
    }
    setInput("")
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
      <div className=" flex justify-center">
        <NftSearch
          setInput={setInput}
          searchHandler={searchHandler}
        ></NftSearch>
      </div>
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3">
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
        {error && <Error message="Wrong address informations"></Error>}
      </section>
    </Layout>
  )
}
