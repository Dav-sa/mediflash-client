export const BlockDetail = ({ data, title }) => {
  return (
    <>
      <div className="py-18 mt-6 flex flex-col rounded-lg border-2 border-solid border-slate-200 p-4 px-6 text-lg">
        <div className="flex justify-center">
          <p className="my-2 text-xl font-semibold">{title} </p>
        </div>
        <div className=" flex min-h-0 w-[400px] flex-col gap-2  p-6">
          <p className="truncate hover:text-sky-300">
            <span className="truncate font-semibold ">Hash:</span>
            {data.blockWithTransactions.hash}
          </p>
          <p className="truncate hover:text-sky-300">
            <span className="font-semibold "> Parent hash </span>:
            {data.blockWithTransactions.parentHash}
          </p>
          <p className="truncate hover:text-sky-300">
            <span className="font-semibold"> Miner </span>:
            {data.blockWithTransactions.miner}
          </p>
          <p className="truncate hover:text-sky-300">
            <span className="font-semibold"> Number of transactions </span>:
            {data.blockWithTransactions.transactions.length}
          </p>
        </div>
      </div>
    </>
  )
}
