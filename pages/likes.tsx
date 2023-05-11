import { useQuery } from "@tanstack/react-query"

import { Loading } from "@/components/Loading"
import { Layout } from "@/components/layout"
import { CardWithLikes } from "@/components/ui/CardWithLikes"

export default function LikePage() {
  const { isLoading, error, data } = useQuery(["getNftsWithLikes"], () =>
    fetch("/api/fetchNftWithLikes").then((res) => res.json())
  )
  if (error) return `An error has occurred`
  if (isLoading)
    return (
      <Layout>
        <Loading></Loading>
      </Layout>
    )

  return (
    <Layout>
      <section className="container grid flex-col justify-center  gap-6 pt-6 pb-8 md:grid-cols-2 md:py-10 lg:grid-cols-3">
        {data &&
          data.map((nft) => {
            console.log(nft)
            return (
              <CardWithLikes
                title={nft.Title}
                likes={nft.LikedBy}
              ></CardWithLikes>
            )
          })}
      </section>
    </Layout>
  )
}
