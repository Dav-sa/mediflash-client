import { alchemy } from "@/lib/alchemy"

const { Utils } = require("alchemy-sdk")

const fetchBlock = async () => {
  const gasPrice = await alchemy.core.getGasPrice()
  const blockNumber = await alchemy.core.getBlockNumber()

  if (!gasPrice || !blockNumber) {
    throw new Error(`error fetching blockchain data`)
  }

  return { gasPrice: Utils.formatEther(gasPrice), blockNumber: blockNumber }
}

export default fetchBlock
