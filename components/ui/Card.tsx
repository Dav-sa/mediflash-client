import { useState } from "react"
import Image from "next/image"
import Router from "next/router"
import { useUser } from "@clerk/nextjs"
import { Heart } from "lucide-react"

import { Button } from "./button"

interface CardProps {
  title: string
  tokenId: string
  symbol: string
  thumbnail: string
}

export const Card = ({ title, tokenId, symbol, thumbnail }: CardProps) => {
  const { isSignedIn, user, isLoaded } = useUser()
  const pubkey = user?.web3Wallets[0].web3Wallet
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      console.log("coucou")
      const body = { title, pubkey }
      await fetch("/api/likes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=" flex flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid ">
      <Image
        className="rounded-t-lg "
        src={thumbnail}
        alt="picture of the nft"
        width={100}
        height={150}
      />

      <div className="mt-2 p-2 ">
        <p className="mb-2 text-xl hover:text-sky-300 ">
          Title : <span className="font-semibold">{title}</span>
        </p>
        <p className="mb-2 hover:text-sky-300">
          Token Id :<span className="font-semibold">{tokenId}</span>
        </p>

        <p className="mb-4  hover:text-sky-300">
          Symbol : <span className="font-semibold">{symbol} $</span>
        </p>
      </div>
      <form>
        <input type="text" defaultValue={title} />
        <input type="text" defaultValue={pubkey} />
        <Button type="submit" onClick={submitData}></Button>
      </form>
    </div>
  )
}
