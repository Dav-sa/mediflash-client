import { useState } from "react"
import Head from "next/head"

import { alchemy } from "@/lib/alchemy"
import { Erc20Card } from "@/components/Erc20Card"
import { Erc20Search } from "@/components/Erc20Search"
import { Error } from "@/components/Error"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [error, setError] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string>("0x...")
  const [contractsAddress, setContractsAddress] = useState([])
  const [results, setResults] = useState(null)
  const searchHandler = async () => {
    setError(false)
    try {
      const erc20ForAddress = await alchemy.core.getTokenBalances(
        walletAddress,
        contractsAddress
      )
      setResults(erc20ForAddress)
    } catch (error) {
      setError(true)
    }
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
      <div className="flex items-centered justify-center">
        <Erc20Search
          setWalletAddress={setWalletAddress}
          searchHandler={searchHandler}
          setContractsAddress={setContractsAddress}
        ></Erc20Search>
      </div>
      <section className="container grid flex-col justify-center gap-6 pt-6 pb-8 ">
        {results ? (
          <Erc20Card
            wallet_address={results.address}
            contract_address={results.tokenBalances[0].contractAddress}
            token_balance={results.tokenBalances[0].tokenBalance}
          ></Erc20Card>
        ) : null}
        {error && <Error message="Wrong address informations"></Error>}
      </section>
    </Layout>
  )
}
