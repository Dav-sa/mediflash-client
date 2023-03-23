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

      <div className="min-h-0 w-[380px] p-6 font-semibold">
        <p className="mb-2 text-2xl hover:text-sky-300 ">{name}</p>
        <div className="flex justify-center">
          <p className="mb-2 truncate   font-normal ">Token id :</p>
          <p className="mx-2 mb-2 truncate font-semibold hover:text-sky-300 ">
            {id}
          </p>
        </div>

        <div className="flex flex-col  truncate">
          <p className="mb-2 font-normal  hover:text-sky-300">Address : </p>
          <p className="mb-2 hover:text-sky-300">{contract_address}</p>
        </div>
        <div className="flex justify-center">
          <p className=" font-normal">Symbol :</p>
          <p className="mx-2 hover:text-sky-300"> {symbol}</p>
        </div>
      </div>
    </div>
  )
}
