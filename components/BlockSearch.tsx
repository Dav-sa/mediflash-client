import React, { useState } from "react"

import { alchemy } from "@/lib/alchemy"
import { Input } from "@/components/ui/input"
import { BlockDetail } from "./BlockDetail"
import { Button } from "./ui/button"

export const BlockSearch = () => {
  const [input, setInput] = useState<number>(0)
  const [results, setResults] = useState({})
  const searchHandler = async () => {
    const data = await alchemy.core.getBlockWithTransactions(input)
    setResults(data)
  }
  return (
    <>
      <div
        className="flex w-1/2 items-center space-x-6 p-4
      "
      >
        <Input
          className="max-w-[420px] flex-1 truncate"
          type="text"
          placeholder="Enter a block number"
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <Button onClick={searchHandler} className="flex-1 px-2">
          Search
        </Button>
        {console.log(results)}
      </div>
    </>
  )
}
