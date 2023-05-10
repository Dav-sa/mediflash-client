import { prisma } from "@/lib/script"

export default async function handle(req, res) {
  const { title, pubKey } = req.body

  const updateNft = await prisma.nft.update({
    where: {
      Title: title,
    },
    data: {
      LikedBy: pubKey,
    },
  })
}
