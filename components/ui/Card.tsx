import Image from "next/image"
import Router from "next/router"

import { Button } from "./button"

interface CardProps {
  id: string
  name: string
  ath: number
  current_price: number
  image: string
  max_supply: number
}

export const Card = ({
  id,
  name,
  ath,
  current_price,
  image,
  max_supply,
}: CardProps) => {
  return (
    <div
      onClick={() => Router.push("/coins/[id]", `/coins/${id}`)}
      className="flex h-96 w-96 flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:shadow-md"
    >
      <Image
        className="rounded-t-lg "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />

      <div className="p-6 font-semibold">
        <h5 className="mb-2 text-2xl ">Name : {name}</h5>
        <p className="mb-4  hover:text-sky-300">
          Current price : {current_price} $
        </p>

        <p className="mb-4  hover:text-sky-300">All time high : {ath} $</p>
        <p className="mb-4 hover:text-sky-300">
          Max supply : {max_supply ? max_supply : "No limit"}
        </p>
        <Button variant="default" size="default">
          More Details
        </Button>
      </div>
    </div>
  )
}
