import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

export const NftSearch = ({ setInput, searchHandler }) => {
  return (
    <>
      <div
        className="flex w-1/2 items-center space-x-6 p-4
      "
      >
        <Input
          className="max-w-[420px] flex-1 truncate"
          type="text"
          placeholder="Enter an address"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={searchHandler} className="flex-1 px-2">
          Search
        </Button>
      </div>
    </>
  )
}
