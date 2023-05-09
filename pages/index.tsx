import { useState } from "react"
import Head from "next/head"
import { SignIn, SignUp } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

import { alchemy } from "@/lib/alchemy"
import { paginate } from "@/lib/paginate"
import { Loading } from "@/components/Loading"
import { Layout } from "@/components/layout"
import { Card } from "@/components/ui/Card"
import { Pagination } from "@/components/ui/Pagination"

export default function IndexPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  const { isLoading, error, data } = useQuery(["getNfts"], () =>
    alchemy.nft.getNftsForContract("0xB003ce92F3b2A8F3dd99207C351eAf05BC605262")
  )
  const paginatedPosts = data
    ? paginate(data.nfts, currentPage, pageSize)
    : null

  if (isLoading)
    return (
      <Layout>
        <Loading></Loading>
      </Layout>
    )

  if (error) return `An error has occurred`

  return (
    <Layout>
      <Head>
        <title>Ternoa test</title>
        <meta
          name="description"
          content="Chainxplorer gives you the latest informations about crypto prices, ethereum blocks, and addresses content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3">
        <SignIn></SignIn>
        <SignUp></SignUp>
        {paginatedPosts &&
          paginatedPosts.map((nft) => {
            return (
              <Card
                key={nft.tokenId}
                thumbnail={nft.media[0].thumbnail}
                title={nft.title}
                tokenId={nft.tokenId}
                symbol={nft.contract.symbol}
              ></Card>
            )
          })}
      </section>
      <Pagination
        items={data.nfts.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      ></Pagination>
    </Layout>
  )
}
