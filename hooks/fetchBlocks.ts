import { alchemy } from "@/lib/alchemy"

const { Utils } = require("alchemy-sdk")

const fetchBlock = async () => {
  const gasPrice = await alchemy.core.getGasPrice()
  const blockNumber = await alchemy.core.getBlockNumber()
  const blockWithTransactions = await alchemy.core.getBlockWithTransactions(
    blockNumber
  )

  if (!gasPrice || !blockNumber) {
    throw new Error(`error fetching blockchain data`)
  }

  return {
    gasPrice: Utils.formatEther(gasPrice),
    blockNumber: blockNumber,
    blockWithTransactions: blockWithTransactions,
  }
}

export default fetchBlock
