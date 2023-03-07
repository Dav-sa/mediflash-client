import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CardProps {
  id: string
  name: string
  ath: number
  current_price: number
  image: string
  max_supply: number
  circulating_supply: number
  commit_four_weeks: number
  stars: number
  total_issues: number
  pr_merged: number
  pr_contributors: number
  description: string
}

export const DetailedCard = ({
  id,
  name,
  ath,
  current_price,
  image,
  max_supply,
  circulating_supply,
  commit_four_weeks,
  stars,
  total_issues,
  pr_merged,
  pr_contributors,
  description,
}: CardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-xl  border-sky-700 bg-slate-800 p-12 text-center hover:border-2 hover:border-solid ">
      <Image
        className="rounded-t-lg "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />
      <h5 className="mb-2 p-4 text-2xl font-semibold ">Name : {name}</h5>
      <Tabs defaultValue="market-data">
        <TabsList>
          <TabsTrigger value="market-data">Market data</TabsTrigger>
          <TabsTrigger value="developer-data">Developer data</TabsTrigger>
          <TabsTrigger value="description">Description</TabsTrigger>
        </TabsList>
        <TabsContent value="market-data">
          <div className="">
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Current price : </p>
              <p className="mx-2 mb-4 font-semibold">{current_price} $</p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300 ">All time high :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {ath} $
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Max supply :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {max_supply ? max_supply : "No limit"}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">All time high :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {ath} $
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Circulating supply :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {circulating_supply} $
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="developer-data">
          <div className="">
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Past month commits : </p>
              <p className="mx-2 mb-4 font-semibold">{commit_four_weeks} </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Stars :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {stars}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Total of issues :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {total_issues}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">PR merged :</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {pr_merged}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mb-4 hover:text-sky-300">Contributors</p>
              <p className="mx-2 mb-4 font-semibold hover:text-sky-300">
                {pr_contributors}
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="description">
          <div className="">
            <p className="mb-4 ">
              {description.length > 2 ? description : "No description provided"}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
