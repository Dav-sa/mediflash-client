import { prisma } from "@/lib/prismaClient"

export default async function handle(req, res) {
  const { title, pubkey } = req.body

  const updateNft = await prisma.nft.update({
    where: {
      Title: title,
    },
    data: {
      LikedBy: {
        connect: {
          pubkey: pubkey,
        },
      },
    },
  })
  res.json(updateNft)
}
