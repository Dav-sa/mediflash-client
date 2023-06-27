import Head from "next/head"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

import { Loading } from "@/components/Loading"
import { Layout } from "@/components/layout"
import { DetailCard } from "@/components/ui/DetailCard"

export default function IndexPage() {
  const router = useRouter()
  const { name } = router.query
  const { isLoading, error, data } = useQuery(
    ["getPokemonByName", name],
    async () => {
      const apiRes = await fetch(
        `https://mediflash-server.onrender.com/pokemons/${name}`
      )
      return apiRes.json()
    }
  )
  if (isLoading)
    return (
      <Layout>
        <Loading>{console.log("loading")}</Loading>
      </Layout>
    )
  if (error) return `An error has occurred`

  return (
    <Layout>
      <Head>
        <title>Mediflash-test</title>
        <meta
          name="description"
          content="Chainxplorer gives you the latest informations about crypto prices, ethereum blocks, and addresses content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8  md:py-10 ">
        {data && (
          <DetailCard
            name={data.name}
            imageUrl={data.imageUrl}
            types={data.types}
          ></DetailCard>
        )}
      </section>
    </Layout>
  )
}
