export const BlockDetail = ({ data }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="my-2 text-lg font-semibold">Latest block info</p>
      </div>
      <div>
        <p className="truncate ">
          <span className="font-semibold"> Hash</span> :{" "}
          {data.blockWithTransactions.hash}
        </p>
        <p className="truncate">
          <span className="font-semibold"> Parent hash </span>:{" "}
          {data.blockWithTransactions.parentHash}
        </p>
        <p className="truncate">
          <span className="font-semibold"> Miner </span>:{" "}
          {data.blockWithTransactions.miner}
        </p>
        <p className="truncate">
          <span className="font-semibold"> Number of transactions </span>:{" "}
          {data.blockWithTransactions.transactions.length}
        </p>
      </div>
    </>
  )
}
