import Image from "next/image"

import { Button } from "./button"

interface CardProps {
  name: string
  ath: number
  current_price: number
  image: string
  max_supply: number
}

export const Card = ({
  name,
  ath,
  current_price,
  image,
  max_supply,
}: CardProps) => {
  return (
    <div className="flex flex-col text-center items-center bg-slate-800 p-6">
      <Image
        className="rounded-t-lg "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />

      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Name : {name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Current price : {current_price} $
        </p>

        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          All time high : {ath} $
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Max supply {max_supply}
        </p>
        <Button variant="default" size="default">
          More Details
        </Button>
      </div>
    </div>
  )
}
