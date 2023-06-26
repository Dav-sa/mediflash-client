import Image from "next/image"

interface CardProps {
  name: string
  imageUrl: string
  types: string[]
}

export const Card = ({ name, imageUrl, types }: CardProps) => {
  return (
    <div className=" flex flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid ">
      <Image
        className="rounded-t-lg "
        src={imageUrl}
        alt="picture of the nft"
        width={100}
        height={150}
      />

      <div className="mt-2 p-2 ">
        <p className="mb-2 text-xl hover:text-sky-300 ">
          Name : <span className="font-semibold">{name}</span>
        </p>
        <p className="mb-2 hover:text-sky-300">
          Types :
          {types.map((type) => {
            return <span className="font-semibold mx-1">{type}</span>
          })}
        </p>
      </div>
    </div>
  )
}
