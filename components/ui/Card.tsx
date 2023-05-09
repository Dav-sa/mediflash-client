import Image from "next/image"
import Router from "next/router"

import { Button } from "./button"

interface CardProps {
  title: string
  tokenId: string
  symbol: string
  thumbnail: string
}

export const Card = ({ title, tokenId, symbol, thumbnail }: CardProps) => {
  return (
    <div className=" flex flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid ">
      <Image
        className="rounded-t-lg "
        src={thumbnail}
        alt="picture of the nft"
        width={100}
        height={150}
      />

      <div className="p-2">
        <p className="mb-2 text-xl hover:text-sky-300 ">
          Title : <span className="font-semibold">{title}</span>
        </p>
        <p className="mb-2 hover:text-sky-300">
          Token Id :<span className="font-semibold"> {tokenId} </span>
        </p>

        <p className="mb-4  hover:text-sky-300">
          Symbol : <span className="font-semibold">{symbol} $</span>
        </p>

        <Button
          variant="default"
          size="default"
          onClick={() => Router.push("/coins/[id]", `/coins/${tokenId}`)}
        >
          More Details
        </Button>
      </div>
    </div>
  )
}
