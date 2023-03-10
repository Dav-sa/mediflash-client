import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

export const BlockSearch = () => {
  return (
    <>
      <div
        className="flex items-center w-1/2 space-x-6 p-4
      "
      >
        <Input
          className="max-w-[420px] flex-1 truncate"
          type="text"
          placeholder="Enter a block number"
        />
        <Button className="flex-1 px-2">Search</Button>
      </div>
    </>
  )
}
