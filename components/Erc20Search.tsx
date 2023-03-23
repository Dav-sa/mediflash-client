import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"

export const Erc20Search = ({
  setWalletAddress,
  searchHandler,
  setContractsAddress,
}) => {
  const DaiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  const UsdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  const UsdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"

  return (
    <>
      <div
        className="flex w-1/2 flex-col items-center justify-center gap-4 space-x-6 p-4 
      "
      >
        <Input
          className="ml-6 max-w-[140px] truncate p-2"
          type="text"
          placeholder="Enter a wallet address..."
          onChange={(e) => setWalletAddress(e.target.value)}
        />

        <Select onValueChange={(value) => setContractsAddress([value])}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Contracts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={UsdcAddress}>USDC</SelectItem>
            <SelectItem value={DaiAddress}>DAI</SelectItem>
            <SelectItem value={UsdtAddress}>USDT</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={searchHandler} className="w-[140px] px-2">
          Search
        </Button>
      </div>
    </>
  )
}
