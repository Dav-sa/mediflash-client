const fetchErc20 = async (contractsAddress) => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/1/contract/${contractsAddress[0]}`
  )

  return {
    data,
  }
}

export default fetchErc20
