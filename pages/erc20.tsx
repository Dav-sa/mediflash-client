import { useState } from "react"
import Head from "next/head"

import { alchemy } from "@/lib/alchemy"
import { ERC20Card } from "@/components/Erc20Card"
import { Erc20Search } from "@/components/Erc20Search"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [walletAddress, setWalletAddress] = useState<string>("0x...")
  const [contractsAddress, setContractsAddress] = useState([])
  const [results, setResults] = useState(null)
  const searchHandler = async () => {
    const erc20ForAddress = await alchemy.core.getTokenBalances(
      walletAddress,
      contractsAddress
    )
    setResults(erc20ForAddress)
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
      <div className="flex justify-center">
        <Erc20Search
          setWalletAddress={setWalletAddress}
          searchHandler={searchHandler}
          setContractsAddress={setContractsAddress}
        ></Erc20Search>
      </div>
      {console.log(results)}
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3"></section>
    </Layout>
  )
}
