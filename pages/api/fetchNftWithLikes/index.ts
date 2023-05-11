import { prisma } from "@/lib/prismaClient"

export default async function handle(req, res) {
  const fetchNft = await prisma.nft.findMany({
    include: { LikedBy: true },
  })
  res.json(fetchNft)
}
