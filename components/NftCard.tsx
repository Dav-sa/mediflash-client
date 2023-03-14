import Image from "next/image"

interface NftCardProps {
  id: string
  name: string
  symbol: string
  image: string
  contract_address: string
}

export const NftCard = ({
  id,
  name,
  symbol,
  image,
  contract_address,
}: NftCardProps) => {
  return (
    <div className="mt-8 flex h-auto w-auto  flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:shadow-md">
      <Image
        className="rounded-3xl "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />

      <div className="p-6 font-semibold min-h-0 w-[400px]">
        <p className="mb-2 text-2xl hover:text-sky-300 ">{name}</p>
        <p className="mb-2 text-2xl hover:text-sky-300 truncate ">
          Token id : {id}
        </p>

        <div className="flex truncate">
          <p className="mb-2  hover:text-sky-300">Address : </p>
          <p className="mb-2 hover:text-sky-300">{contract_address}</p>
        </div>
        <p className=" hover:text-sky-300">Symbol : {symbol}</p>
      </div>
    </div>
  )
}
