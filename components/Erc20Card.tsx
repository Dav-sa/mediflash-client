interface Erc20CardProps {
  wallet_address: string
  contract_address: string
  token_balance: string
}

export const Erc20Card = ({ token_balance }: Erc20CardProps) => {
  return (
    <div className="mt-8 flex h-auto w-auto flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:shadow-md">
      <div className="min-h-0 w-[280px] p-6 font-semibold">
        <div className="flex flex-col justify-center truncate">
          <p className=" font-normal">Token balance :</p>
          <p className="mx-2 hover:text-sky-300">
            {parseInt(token_balance, 16)}
          </p>
        </div>
      </div>
    </div>
  )
}
