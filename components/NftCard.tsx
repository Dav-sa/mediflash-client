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
    <div className="flex mt-8 flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:shadow-md">
      <Image
        className="rounded-t-lg "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />

      <div className="p-6 font-semibold">
        <p className="mb-2 text-2xl ">{name}</p>
        <p className="mb-2 text-2xl ">Token id : {id}</p>

        <p className="mb-4  hover:text-sky-300">
          Address : {contract_address} $
        </p>
        <p className="mb-4 hover:text-sky-300">Symbol : {symbol}</p>
      </div>
    </div>
  )
}
