import { useState } from "react"
import Head from "next/head"
import { useQuery } from "@tanstack/react-query"

import { paginate } from "@/lib/paginate"
import { Loading } from "@/components/Loading"
import { Layout } from "@/components/layout"
import { Card } from "@/components/ui/Card"
import { Pagination } from "@/components/ui/Pagination"

export default function IndexPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  const { isLoading, error, data } = useQuery(["getPokemons"], async () => {
    const apiRes = await fetch("https://mediflash-server.onrender.com/pokemons")
    return apiRes.json()
  })
  const paginatedPosts = data
    ? paginate(data.pokemons, currentPage, pageSize)
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
        <title>Mediflash</title>
        <meta
          name="description"
          content="Chainxplorer gives you the latest informations about crypto prices, ethereum blocks, and addresses content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3">
        {console.log(data)}
        {paginatedPosts &&
          paginatedPosts.map((pokemon) => {
            return (
              <Card
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
              ></Card>
            )
          })}
      </section>
      <Pagination
        items={data.pokemons.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      ></Pagination>
    </Layout>
  )
}
