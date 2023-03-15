import Image from "next/image"

interface Erc20CardProps {
  name: string
  image: string
  contract_address: string
  token_balance: string
}

export const ERC20Card = ({
  image,
  name,
  contract_address,
  token_balance,
}: Erc20CardProps) => {
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
          <p className="mb-2 truncate   font-normal ">Contract address :</p>
          <p className="mx-2 mb-2 truncate font-semibold hover:text-sky-300 ">
            {contract_address}
          </p>
        </div>

        <div className="flex flex-col truncate">
          <p className="mb-2 font-normal  hover:text-sky-300">Address : </p>
          <p className="mb-2 hover:text-sky-300">{contract_address}</p>
        </div>
        <div className="flex justify-center">
          <p className=" font-normal">Token balance :</p>
          <p className="mx-2 hover:text-sky-300"> {token_balance}</p>
        </div>
      </div>
    </div>
  )
}
