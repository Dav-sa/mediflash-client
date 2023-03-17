export const BlockDetail = ({ data, title }) => {
  return (
    <>
      <div className="py-18 mt-6 flex max-w-[402px] flex-col rounded-lg border-2 border-solid border-slate-200 py-4 ">
        <div className="flex justify-center">
          <p className="my-2 text-xl font-normal">{title} </p>
        </div>
        <div className=" flex  text-left min-h-0 w-[400px] flex-col gap-2  p-6">
          <p className="truncate hover:text-sky-300 font-semibold">
            <span className="truncate font-normal ">Hash:</span>
            {data.blockWithTransactions.hash}
          </p>
          <p className="truncate hover:text-sky-300 font-semibold">
            <span className="font-normal "> Parent hash </span>:
            {data.blockWithTransactions.parentHash}
          </p>
          <p className="truncate font-semibold hover:text-sky-300">
            <span className="font-normal"> Miner </span>:
            {data.blockWithTransactions.miner}
          </p>
          <p className="truncate font-semibold hover:text-sky-300">
            <span className="font-normal"> Number of transactions </span>:
            {data.blockWithTransactions.transactions.length}
          </p>
        </div>
      </div>
    </>
  )
}
