import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

async function seedtable() {
  const response = {
    nfts: [
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #1",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/1.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/1.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/010bae46bdffb291109241ce09b50919",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/010bae46bdffb291109241ce09b50919",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/1.png",
            format: "png",
            bytes: 2630768,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #1",
          date: 1650980857390,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/1.png",
          edition: 1,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Pink",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Mug 20 Minutes",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.005Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000002",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #2",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/2.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/2.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/0a4b468b18056aea6eb9098b78716430",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/0a4b468b18056aea6eb9098b78716430",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/2.png",
            format: "png",
            bytes: 2783458,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #2",
          date: 1650980858628,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/2.png",
          edition: 2,
          attributes: [
            {
              value: "Plain 10",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 1",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Terrazzo",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.604Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000003",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #3",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/3.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/3.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/24f5ffaca9b78e5033096b9db6b7a66b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/24f5ffaca9b78e5033096b9db6b7a66b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/3.png",
            format: "png",
            bytes: 2643173,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #3",
          date: 1650980859642,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/3.png",
          edition: 3,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Baseball Scorecard",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Rainbow",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.009Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000004",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #4",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/4.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/4.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/ec76f2008ccb5046dcc774af9e593911",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ec76f2008ccb5046dcc774af9e593911",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/4.png",
            format: "png",
            bytes: 2999184,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #4",
          date: 1650980860860,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/4.png",
          edition: 4,
          attributes: [
            {
              value: "Plain 7",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Screen",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Body",
            },
            {
              value: "Lyon",
              trait_type: "Stickers",
            },
            {
              value: "Zodiac",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.282Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000005",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #5",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/5.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/5.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/4853018596ef391d49a4d1b18596723c",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/4853018596ef391d49a4d1b18596723c",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/5.png",
            format: "png",
            bytes: 2090122,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #5",
          date: 1650980861786,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/5.png",
          edition: 5,
          attributes: [
            {
              value: "Plain 8",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Light Blue",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.035Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000006",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #6",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/6.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/6.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/1059ea82d7e14618f6e2a32a34ae64bf",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/1059ea82d7e14618f6e2a32a34ae64bf",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/6.png",
            format: "png",
            bytes: 5377772,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #6",
          date: 1650980863872,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/6.png",
          edition: 6,
          attributes: [
            {
              value: "Gradient 6",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Light Blue",
              trait_type: "Body",
            },
            {
              value: "Nice",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.165Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000007",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #7",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/7.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/7.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/2edcf5f31655540a242564c072f9537d",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/2edcf5f31655540a242564c072f9537d",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/7.png",
            format: "png",
            bytes: 3815574,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #7",
          date: 1650980865407,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/7.png",
          edition: 7,
          attributes: [
            {
              value: "Gradient 2",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Marble",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "Braille Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.664Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000008",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #8",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://ipfs.io/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/8.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/8.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/5636dbe1866e20749e8b6bf24a68a536",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/5636dbe1866e20749e8b6bf24a68a536",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/8.png",
            format: "png",
            bytes: 5215251,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #8",
          date: 1650980867731,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/8.png",
          edition: 8,
          attributes: [
            {
              value: "Gradient 7",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Violet",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "Pencil",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-09T10:16:38.945Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000009",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #9",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/9.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/9.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/406e51c6370874253eecde7441318b7b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/406e51c6370874253eecde7441318b7b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/9.png",
            format: "png",
            bytes: 3209236,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #9",
          date: 1650980868985,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/9.png",
          edition: 9,
          attributes: [
            {
              value: "Gradient 4",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Zodiac",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Yellow",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.023Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #10",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/10.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/10.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/47d4e752879bad8a149170cfbf1b1045",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/47d4e752879bad8a149170cfbf1b1045",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/10.png",
            format: "png",
            bytes: 2401496,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #10",
          date: 1650980869989,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/10.png",
          edition: 10,
          attributes: [
            {
              value: "Plain 9",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 1",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "Paris",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.074Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #11",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/11.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/11.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/ddcd4474ccb44e122bc30e18d3f1e870",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ddcd4474ccb44e122bc30e18d3f1e870",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/11.png",
            format: "png",
            bytes: 2311918,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #11",
          date: 1650980870914,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/11.png",
          edition: 11,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Blood",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Zebra",
              trait_type: "Body",
            },
            {
              value: "Two Cities 1",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.885Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #12",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/12.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/12.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/6b0d347714998cea8954a19b9424f511",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/6b0d347714998cea8954a19b9424f511",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/12.png",
            format: "png",
            bytes: 3199731,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #12",
          date: 1650980872009,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/12.png",
          edition: 12,
          attributes: [
            {
              value: "Plain 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "20 Minutes",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Rainbow",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Space Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.874Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #13",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/13.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/13.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/01e6a263a4d13759d1cad9833bb85467",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/01e6a263a4d13759d1cad9833bb85467",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/13.png",
            format: "png",
            bytes: 2919599,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #13",
          date: 1650980873186,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/13.png",
          edition: 13,
          attributes: [
            {
              value: "Gradient 5",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Rainbow",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.022Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #14",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/14.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/14.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9d2c815339fdeab6db0c0330a5a28e34",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9d2c815339fdeab6db0c0330a5a28e34",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/14.png",
            format: "png",
            bytes: 2300155,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #14",
          date: 1650980874172,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/14.png",
          edition: 14,
          attributes: [
            {
              value: "Plain 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Two Cities 1",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "Ledger",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.842Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000000f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #15",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/15.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/15.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/2df3c16dbc3eb98e1e70926234a37e95",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/2df3c16dbc3eb98e1e70926234a37e95",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/15.png",
            format: "png",
            bytes: 2246745,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #15",
          date: 1650980875158,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/15.png",
          edition: 15,
          attributes: [
            {
              value: "Plain 5",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 3",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Braille Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.753Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000010",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #16",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/16.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/16.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/cd04f7757828f31acf395713dcd1d69b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/cd04f7757828f31acf395713dcd1d69b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/16.png",
            format: "png",
            bytes: 4380017,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #16",
          date: 1650980876775,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/16.png",
          edition: 16,
          attributes: [
            {
              value: "Gradient 3",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Baseball Scorecard",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Blue",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.598Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000011",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #17",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/17.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/17.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/709717c671d646cf6f4448276feca661",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/709717c671d646cf6f4448276feca661",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/17.png",
            format: "png",
            bytes: 2240930,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #17",
          date: 1650980877742,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/17.png",
          edition: 17,
          attributes: [
            {
              value: "Plain 8",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Turquoise",
              trait_type: "Body",
            },
            {
              value: "Strasbourg",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.643Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000012",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #18",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/18.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/18.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9f64aff4339622cdc686d6ff849b8809",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9f64aff4339622cdc686d6ff849b8809",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/18.png",
            format: "png",
            bytes: 1554131,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #18",
          date: 1650980878562,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/18.png",
          edition: 18,
          attributes: [
            {
              value: "Plain 13",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 9",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.025Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000013",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #19",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/19.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/19.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/37955c70ca0fcfe999a5a397023b6370",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/37955c70ca0fcfe999a5a397023b6370",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/19.png",
            format: "png",
            bytes: 2637235,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #19",
          date: 1650980879637,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/19.png",
          edition: 19,
          attributes: [
            {
              value: "Plain 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Blue",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.867Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000014",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #20",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/20.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/20.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/8f2274dd9aea6cccd3736e27d6f3ec7e",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/8f2274dd9aea6cccd3736e27d6f3ec7e",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/20.png",
            format: "png",
            bytes: 6364289,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #20",
          date: 1650980880730,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/20.png",
          edition: 20,
          attributes: [
            {
              value: "Metro",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "20 Minutes",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Type Guide",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Body",
            },
            {
              value: "Seven Cities",
              trait_type: "Stickers",
            },
            {
              value: "Classic 20 Minutes",
              trait_type: "Keyboard",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Mug 20 Minutes",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "Chic Pen",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.993Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000015",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #21",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/21.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/21.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/c65a2f3e5433281913de49474416d81c",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c65a2f3e5433281913de49474416d81c",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/21.png",
            format: "png",
            bytes: 2238223,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #21",
          date: 1650980881688,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/21.png",
          edition: 21,
          attributes: [
            {
              value: "Plain 5",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 3",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Paris",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.282Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000016",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #22",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/22.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/22.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/519bd16ad598269821850a38934d34af",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/519bd16ad598269821850a38934d34af",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/22.png",
            format: "png",
            bytes: 3962437,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #22",
          date: 1650980883403,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/22.png",
          edition: 22,
          attributes: [
            {
              value: "City",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Marble",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.940Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000017",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #23",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/23.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/23.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/bef96f7e80d36bb0d51914cbf8edf9b0",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/bef96f7e80d36bb0d51914cbf8edf9b0",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/23.png",
            format: "png",
            bytes: 3590176,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #23",
          date: 1650980884758,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/23.png",
          edition: 23,
          attributes: [
            {
              value: "Gradient 2",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.956Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000018",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #24",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/24.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/24.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/81c77148be7494ffa077f50a290f8c6f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/81c77148be7494ffa077f50a290f8c6f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/24.png",
            format: "png",
            bytes: 2080906,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #24",
          date: 1650980885709,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/24.png",
          edition: 24,
          attributes: [
            {
              value: "Plain 13",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 9",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Pink",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.116Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000019",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #25",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/25.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/25.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/98fea9f7fbf7d2c212477e315c16e81e",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/98fea9f7fbf7d2c212477e315c16e81e",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/25.png",
            format: "png",
            bytes: 2639609,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #25",
          date: 1650980886736,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/25.png",
          edition: 25,
          attributes: [
            {
              value: "Plain 10",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Bronze",
              trait_type: "Body",
            },
            {
              value: "Two Cities 3",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.461Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #26",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/26.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/26.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/5bf07b0174416cec2697046c04711074",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/5bf07b0174416cec2697046c04711074",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/26.png",
            format: "png",
            bytes: 3354333,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #26",
          date: 1650980888054,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/26.png",
          edition: 26,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Rainbow",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Tom Hanks",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.000Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #27",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/27.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/27.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/bfead8a89cfbea41e526dbd2d611ed40",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/bfead8a89cfbea41e526dbd2d611ed40",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/27.png",
            format: "png",
            bytes: 2655376,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #27",
          date: 1650980889159,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/27.png",
          edition: 27,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Terrazzo",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.283Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #28",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/28.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/28.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/55ee303ed4fc4561b4bbe3193f80eaf8",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/55ee303ed4fc4561b4bbe3193f80eaf8",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/28.png",
            format: "png",
            bytes: 2640446,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #28",
          date: 1650980890368,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/28.png",
          edition: 28,
          attributes: [
            {
              value: "Plain 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Nice",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.219Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #29",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/29.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/29.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/b2e6c4de82c7aefc39043c66e92533ad",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b2e6c4de82c7aefc39043c66e92533ad",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/29.png",
            format: "png",
            bytes: 5850465,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #29",
          date: 1650980892700,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/29.png",
          edition: 29,
          attributes: [
            {
              value: "Gradient 7",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "20 Minutes",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Strasbourg",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "Pencil",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.532Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #30",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/30.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/30.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/1da530d8fbb0860a4b2531afbb7b5eac",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/1da530d8fbb0860a4b2531afbb7b5eac",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/30.png",
            format: "png",
            bytes: 2339464,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #30",
          date: 1650980893668,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/30.png",
          edition: 30,
          attributes: [
            {
              value: "Plain 5",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Light Blue",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.539Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000001f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #31",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/31.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/31.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/431cf9ddaeb09116fde2ea287ccae687",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/431cf9ddaeb09116fde2ea287ccae687",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/31.png",
            format: "png",
            bytes: 2511600,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #31",
          date: 1650980894690,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/31.png",
          edition: 31,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 8",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.075Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000020",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #32",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/32.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/32.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/b77f9226e542e178375a3945f21caa59",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b77f9226e542e178375a3945f21caa59",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/32.png",
            format: "png",
            bytes: 2981385,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #32",
          date: 1650980895922,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/32.png",
          edition: 32,
          attributes: [
            {
              value: "Plain 3",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 3",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Lyon",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Mug 20 Minutes",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "Pencil",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.544Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000021",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #33",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/33.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/33.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/469d935f491a8eabfa94b855e6e6fc18",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/469d935f491a8eabfa94b855e6e6fc18",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/33.png",
            format: "png",
            bytes: 2178536,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #33",
          date: 1650980896857,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/33.png",
          edition: 33,
          attributes: [
            {
              value: "Plain 4",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Eggplant",
              trait_type: "Body",
            },
            {
              value: "Two Cities 2",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.568Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000022",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #34",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/34.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/34.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/ce292ad2a3138607b8949cdc623021ac",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ce292ad2a3138607b8949cdc623021ac",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/34.png",
            format: "png",
            bytes: 2577031,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #34",
          date: 1650980897927,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/34.png",
          edition: 34,
          attributes: [
            {
              value: "Plain 9",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 1",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Violet",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.977Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000023",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #35",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/35.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/35.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/930296e8d66d76f3b7e502f40abc5501",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/930296e8d66d76f3b7e502f40abc5501",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/35.png",
            format: "png",
            bytes: 2153065,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #35",
          date: 1650980898859,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/35.png",
          edition: 35,
          attributes: [
            {
              value: "Plain 7",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "Strasbourg",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.201Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000024",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #36",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/36.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/36.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/738f3047220c7c26714d651251987613",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/738f3047220c7c26714d651251987613",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/36.png",
            format: "png",
            bytes: 2399926,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #36",
          date: 1650980899783,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/36.png",
          edition: 36,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Baseball Scorecard",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.872Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000025",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #37",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/37.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/37.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/fd28373d657e3928683fb6a63a72db04",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/fd28373d657e3928683fb6a63a72db04",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/37.png",
            format: "png",
            bytes: 2792861,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #37",
          date: 1650980901019,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/37.png",
          edition: 37,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Rainbow",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "Chic Pen",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.551Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000026",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #38",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/38.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/38.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/8548ff54033ddc9ecb803e6c42496443",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/8548ff54033ddc9ecb803e6c42496443",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/38.png",
            format: "png",
            bytes: 3163449,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #38",
          date: 1650980902277,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/38.png",
          edition: 38,
          attributes: [
            {
              value: "Gradient 5",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 1",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Leopard",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.580Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000027",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #39",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/39.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/39.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/bd1c703fde068c4876bf6822e69cd3a5",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/bd1c703fde068c4876bf6822e69cd3a5",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/39.png",
            format: "png",
            bytes: 2128002,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #39",
          date: 1650980903170,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/39.png",
          edition: 39,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 9",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.133Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000028",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #40",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/40.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/40.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/0b71d2d1451f2eeddb4955efc0b0fff8",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/0b71d2d1451f2eeddb4955efc0b0fff8",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/40.png",
            format: "png",
            bytes: 5979522,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #40",
          date: 1650980905433,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/40.png",
          edition: 40,
          attributes: [
            {
              value: "Beach",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Zodiac",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "Comic Effect",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.224Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000029",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #41",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/41.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/41.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/0e623b706986e63ab7bffb7402646486",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/0e623b706986e63ab7bffb7402646486",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/41.png",
            format: "png",
            bytes: 2119075,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #41",
          date: 1650980906396,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/41.png",
          edition: 41,
          attributes: [
            {
              value: "Plain 5",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Blood",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Eggplant",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.879Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #42",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/42.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/42.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/e0ab870b38ad83b655dbc296dddc53fd",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/e0ab870b38ad83b655dbc296dddc53fd",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/42.png",
            format: "png",
            bytes: 2687714,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #42",
          date: 1650980907554,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/42.png",
          edition: 42,
          attributes: [
            {
              value: "Gradient 5",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Yellow",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.792Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #43",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/43.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/43.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/86d7cd0c960f47ccd659628094ed77bd",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/86d7cd0c960f47ccd659628094ed77bd",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/43.png",
            format: "png",
            bytes: 2502488,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #43",
          date: 1650980908638,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/43.png",
          edition: 43,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Red",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.188Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #44",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/44.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/44.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/c46d47419322c8700d188da0f3901a3d",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c46d47419322c8700d188da0f3901a3d",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/44.png",
            format: "png",
            bytes: 2301423,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #44",
          date: 1650980909591,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/44.png",
          edition: 44,
          attributes: [
            {
              value: "Plain 4",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Eggplant",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic 20 Minutes",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.300Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #45",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/45.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/45.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/ec9548e890dd052c148f891eb0ecc0fc",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ec9548e890dd052c148f891eb0ecc0fc",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/45.png",
            format: "png",
            bytes: 2650635,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #45",
          date: 1650980910727,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/45.png",
          edition: 45,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 4",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.758Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #46",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/46.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/46.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/cdaf66b07c4567acf7e154ca936ae4ad",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/cdaf66b07c4567acf7e154ca936ae4ad",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/46.png",
            format: "png",
            bytes: 2212385,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #46",
          date: 1650980911709,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/46.png",
          edition: 46,
          attributes: [
            {
              value: "Plain 3",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Kid",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.843Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000002f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #47",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/47.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/47.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/d57bcaa836ac8d9fd06be61e79baab5b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/d57bcaa836ac8d9fd06be61e79baab5b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/47.png",
            format: "png",
            bytes: 2425132,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #47",
          date: 1650980912730,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/47.png",
          edition: 47,
          attributes: [
            {
              value: "Plain 10",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 4",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "Chic Pen",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.306Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000030",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #48",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/48.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/48.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/94f3376c64117d591454063add750932",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/94f3376c64117d591454063add750932",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/48.png",
            format: "png",
            bytes: 2781008,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #48",
          date: 1650980913941,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/48.png",
          edition: 48,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.711Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000031",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #49",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/49.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/49.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/43e1ab133258cb8f76acabdb1a437861",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/43e1ab133258cb8f76acabdb1a437861",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/49.png",
            format: "png",
            bytes: 2373153,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #49",
          date: 1650980914870,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/49.png",
          edition: 49,
          attributes: [
            {
              value: "Plain 3",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 2",
              trait_type: "Quote",
            },
            {
              value: "Rainbow",
              trait_type: "Type Guide",
            },
            {
              value: "Zebra",
              trait_type: "Body",
            },
            {
              value: "Blood",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.476Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000032",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #50",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/50.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/50.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/d53c6a93800a4bbe8fa82c923c8e5f46",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/d53c6a93800a4bbe8fa82c923c8e5f46",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/50.png",
            format: "png",
            bytes: 2473603,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #50",
          date: 1650980915953,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/50.png",
          edition: 50,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Red",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.024Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000033",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #51",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/51.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/51.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/cd184d336acf8d7e42f32c3f9dfab6ed",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/cd184d336acf8d7e42f32c3f9dfab6ed",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/51.png",
            format: "png",
            bytes: 2546270,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #51",
          date: 1650980917006,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/51.png",
          edition: 51,
          attributes: [
            {
              value: "Plain 5",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 7",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Zebra",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.874Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000034",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #52",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/52.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/52.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/6dfea24ceb946babefe1b65e7f136cdd",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/6dfea24ceb946babefe1b65e7f136cdd",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/52.png",
            format: "png",
            bytes: 2389212,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #52",
          date: 1650980918055,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/52.png",
          edition: 52,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 4",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Eggplant",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Can",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.347Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000035",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #53",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/53.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/53.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/b0906c657d390ab7ef9359dcfd85a31e",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b0906c657d390ab7ef9359dcfd85a31e",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/53.png",
            format: "png",
            bytes: 4248229,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #53",
          date: 1650980919773,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/53.png",
          edition: 53,
          attributes: [
            {
              value: "City",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Marble",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.156Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000036",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #54",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/54.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/54.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/0b244afa05d041abce311778b2fd80e2",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/0b244afa05d041abce311778b2fd80e2",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/54.png",
            format: "png",
            bytes: 2443642,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #54",
          date: 1650980920805,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/54.png",
          edition: 54,
          attributes: [
            {
              value: "Plain 2",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Gold",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.135Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000037",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #55",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/55.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/55.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/3d199113bbff76f52683570abb86f78f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/3d199113bbff76f52683570abb86f78f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/55.png",
            format: "png",
            bytes: 2233756,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #55",
          date: 1650980921803,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/55.png",
          edition: 55,
          attributes: [
            {
              value: "Plain 7",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Mug 20 Minutes",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.202Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000038",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #56",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/56.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/56.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/76fcf4a143ef8996a975328a915a5976",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/76fcf4a143ef8996a975328a915a5976",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/56.png",
            format: "png",
            bytes: 2706550,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #56",
          date: 1650980922844,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/56.png",
          edition: 56,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Bronze",
              trait_type: "Body",
            },
            {
              value: "Nice",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.872Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000039",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #57",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/57.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/57.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/85379d95b2f0e58011b8acc4d2d9291c",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/85379d95b2f0e58011b8acc4d2d9291c",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/57.png",
            format: "png",
            bytes: 2920461,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #57",
          date: 1650980924050,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/57.png",
          edition: 57,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Tom Hanks",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.655Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #58",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/58.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/58.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/32377fa24723bc5001f953890f7d51a2",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/32377fa24723bc5001f953890f7d51a2",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/58.png",
            format: "png",
            bytes: 3406632,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #58",
          date: 1650980925390,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/58.png",
          edition: 58,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 8",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Leopard",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Rainbow",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.951Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #59",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/59.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/59.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/3c82b7d498b4f43c65414cec5ccbbea6",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/3c82b7d498b4f43c65414cec5ccbbea6",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/59.png",
            format: "png",
            bytes: 2806535,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #59",
          date: 1650980926582,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/59.png",
          edition: 59,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "Quote 1",
              trait_type: "Quote",
            },
            {
              value: "Rainbow",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.253Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #60",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/60.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/60.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/51a0fd1aec3fd070b39725cf02f0db9d",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/51a0fd1aec3fd070b39725cf02f0db9d",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/60.png",
            format: "png",
            bytes: 2485222,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #60",
          date: 1650980927593,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/60.png",
          edition: 60,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.432Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #61",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/61.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/61.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9b75a6e1ae3f945028986e21b5eda088",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9b75a6e1ae3f945028986e21b5eda088",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/61.png",
            format: "png",
            bytes: 2647436,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #61",
          date: 1650980928669,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/61.png",
          edition: 61,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Gold",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.368Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #62",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/62.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/62.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/32a886c9139d8973482f04e5c0fcc923",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/32a886c9139d8973482f04e5c0fcc923",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/62.png",
            format: "png",
            bytes: 2706885,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #62",
          date: 1650980929694,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/62.png",
          edition: 62,
          attributes: [
            {
              value: "Plain 8",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Wood",
              trait_type: "Body",
            },
            {
              value: "Two Cities 1",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.438Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000003f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #63",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/63.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/63.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/c2022b2e0818fd052c6b9f77ed2cf94f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c2022b2e0818fd052c6b9f77ed2cf94f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/63.png",
            format: "png",
            bytes: 2462911,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #63",
          date: 1650980930725,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/63.png",
          edition: 63,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "Two Cities 3",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.343Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000040",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #64",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/64.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/64.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/6e734369b25661004681a9d33afbb41d",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/6e734369b25661004681a9d33afbb41d",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/64.png",
            format: "png",
            bytes: 2942349,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #64",
          date: 1650980931881,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/64.png",
          edition: 64,
          attributes: [
            {
              value: "Gradient 4",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.131Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000041",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #65",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/65.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/65.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/2eb7c4fdaa081b47dcded60713cba72b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/2eb7c4fdaa081b47dcded60713cba72b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/65.png",
            format: "png",
            bytes: 4446172,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #65",
          date: 1650980933638,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/65.png",
          edition: 65,
          attributes: [
            {
              value: "Gradient 3",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Screen",
              trait_type: "Page",
            },
            {
              value: "Quote 3",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Red",
              trait_type: "Body",
            },
            {
              value: "Nantes",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "Space Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "Ledger",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.211Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000042",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #66",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/66.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/66.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a858379b6026733cad45ab0ac8caa761",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a858379b6026733cad45ab0ac8caa761",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/66.png",
            format: "png",
            bytes: 2874602,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #66",
          date: 1650980934790,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/66.png",
          edition: 66,
          attributes: [
            {
              value: "Plain 9",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Hat",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Gold",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.824Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000043",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #67",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/67.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/67.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/c50ee6267057eae2f4ea6cce32ec50be",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c50ee6267057eae2f4ea6cce32ec50be",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/67.png",
            format: "png",
            bytes: 2110886,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #67",
          date: 1650980935758,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/67.png",
          edition: 67,
          attributes: [
            {
              value: "Plain 7",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:01:59.917Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000044",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #68",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/68.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/68.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/f557a645e3f9919d86f83d8cfa01f5c1",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/f557a645e3f9919d86f83d8cfa01f5c1",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/68.png",
            format: "png",
            bytes: 5018827,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #68",
          date: 1650980938018,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/68.png",
          edition: 68,
          attributes: [
            {
              value: "Gradient 7",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Light Blue",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Smiley",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.397Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000045",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #69",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/69.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/69.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/e3e6688e406770cb47c46c7ba98f1f2f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/e3e6688e406770cb47c46c7ba98f1f2f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/69.png",
            format: "png",
            bytes: 1703298,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #69",
          date: 1650980938894,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/69.png",
          edition: 69,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 8",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.619Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000046",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #70",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/70.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/70.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/c2e5f4b4652ddee002c4fbfdb8d1ab76",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c2e5f4b4652ddee002c4fbfdb8d1ab76",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/70.png",
            format: "png",
            bytes: 3051749,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #70",
          date: 1650980940037,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/70.png",
          edition: 70,
          attributes: [
            {
              value: "Plain 10",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Bronze",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.662Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000047",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #71",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/71.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/71.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/827213cb9b7de3e3af0e3a0c118ef75c",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/827213cb9b7de3e3af0e3a0c118ef75c",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/71.png",
            format: "png",
            bytes: 2064322,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #71",
          date: 1650980940959,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/71.png",
          edition: 71,
          attributes: [
            {
              value: "Plain 2",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Blood",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Biarritz",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.832Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000048",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #72",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/72.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/72.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a75fbf6d8869433ac9bb453ba0ff9626",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a75fbf6d8869433ac9bb453ba0ff9626",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/72.png",
            format: "png",
            bytes: 2129604,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #72",
          date: 1650980941856,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/72.png",
          edition: 72,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Light Blue",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.006Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000049",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #73",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/73.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/73.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/b758f4060a0d9f80605f836c4f85d252",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b758f4060a0d9f80605f836c4f85d252",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/73.png",
            format: "png",
            bytes: 2797112,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #73",
          date: 1650980942944,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/73.png",
          edition: 73,
          attributes: [
            {
              value: "Plain 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Turquoise",
              trait_type: "Body",
            },
            {
              value: "Lyon",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.845Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #74",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/74.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/74.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a189600a460ba050f73c6636a59e5e6f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a189600a460ba050f73c6636a59e5e6f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/74.png",
            format: "png",
            bytes: 2657498,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #74",
          date: 1650980944173,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/74.png",
          edition: 74,
          attributes: [
            {
              value: "Plain 4",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Body",
            },
            {
              value: "Paris",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.436Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #75",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/75.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/75.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/abd7429d0a7bece104b7082e4f19172c",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/abd7429d0a7bece104b7082e4f19172c",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/75.png",
            format: "png",
            bytes: 3407204,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #75",
          date: 1650980945355,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/75.png",
          edition: 75,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Blood",
              trait_type: "Page",
            },
            {
              value: "Quote 7",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Wood",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.860Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #76",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/76.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/76.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/fdcf8d2e864633eb9c911424ecd9874d",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/fdcf8d2e864633eb9c911424ecd9874d",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/76.png",
            format: "png",
            bytes: 4814125,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #76",
          date: 1650980947344,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/76.png",
          edition: 76,
          attributes: [
            {
              value: "Gradient 6",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Paris",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T13:11:45.312Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #77",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/77.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/77.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a1d355cc2cb39b2881f44b7cc6f282f7",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a1d355cc2cb39b2881f44b7cc6f282f7",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/77.png",
            format: "png",
            bytes: 2387263,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #77",
          date: 1650980948317,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/77.png",
          edition: 77,
          attributes: [
            {
              value: "Plain 3",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "Tom Hanks",
              trait_type: "Stickers",
            },
            {
              value: "Smiley",
              trait_type: "Keyboard",
            },
            {
              value: "Rainbow",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.273Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #78",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/78.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/78.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9048b4a5d81986af6f71a5fda7817f71",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9048b4a5d81986af6f71a5fda7817f71",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/78.png",
            format: "png",
            bytes: 2211848,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #78",
          date: 1650980949327,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/78.png",
          edition: 78,
          attributes: [
            {
              value: "Plain 6",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Pink",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "Kid",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.364Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000004f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #79",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/79.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/79.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/39b3ebc29a3ece3fefb197c15ccc8769",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/39b3ebc29a3ece3fefb197c15ccc8769",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/79.png",
            format: "png",
            bytes: 2637714,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #79",
          date: 1650980950401,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/79.png",
          edition: 79,
          attributes: [
            {
              value: "Plain 8",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Pink",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Can",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.775Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000050",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #80",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/80.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/80.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/aae13ebbd3ae76943feefb6121568682",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/aae13ebbd3ae76943feefb6121568682",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/80.png",
            format: "png",
            bytes: 6226728,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #80",
          date: 1650980952694,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/80.png",
          edition: 80,
          attributes: [
            {
              value: "Beach",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Baseball Scorecard",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Turquoise",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:03.222Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000051",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #81",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/81.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/81.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/23d4a2daef3a370acdebecf53905f4cf",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/23d4a2daef3a370acdebecf53905f4cf",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/81.png",
            format: "png",
            bytes: 2373516,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #81",
          date: 1650980953768,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/81.png",
          edition: 81,
          attributes: [
            {
              value: "Plain 8",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "Quote 8",
              trait_type: "Quote",
            },
            {
              value: "Chrome",
              trait_type: "Type Guide",
            },
            {
              value: "Brown",
              trait_type: "Body",
            },
            {
              value: "Comic Effect",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.258Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000052",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #82",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/82.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/82.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9af7050244f6b6d67aabbd6d6a8f653b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9af7050244f6b6d67aabbd6d6a8f653b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/82.png",
            format: "png",
            bytes: 1863865,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #82",
          date: 1650980954668,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/82.png",
          edition: 82,
          attributes: [
            {
              value: "Plain 10",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Gold",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.452Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000053",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #83",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/83.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/83.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/ce1857e6121212e183ef9b18e8f821e6",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/ce1857e6121212e183ef9b18e8f821e6",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/83.png",
            format: "png",
            bytes: 3473868,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #83",
          date: 1650980956069,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/83.png",
          edition: 83,
          attributes: [
            {
              value: "Gradient 2",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Screen",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Type Guide",
            },
            {
              value: "Black",
              trait_type: "Body",
            },
            {
              value: "Lyon",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Can",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.796Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000054",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #84",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/84.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/84.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/452341a08096eddd09de9b7e86d67a29",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/452341a08096eddd09de9b7e86d67a29",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/84.png",
            format: "png",
            bytes: 2506532,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #84",
          date: 1650980957114,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/84.png",
          edition: 84,
          attributes: [
            {
              value: "Plain 2",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Plane",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "Classic Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.920Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000055",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #85",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/85.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/85.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/04405323187dfb47e4b0cd04d2884b23",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/04405323187dfb47e4b0cd04d2884b23",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/85.png",
            format: "png",
            bytes: 2585882,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #85",
          date: 1650980958362,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/85.png",
          edition: 85,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "Vintage",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Violet",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Rainbow",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.590Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000056",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #86",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/86.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/86.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/51da98f5a4afffac832838762e78be19",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/51da98f5a4afffac832838762e78be19",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/86.png",
            format: "png",
            bytes: 2299935,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #86",
          date: 1650980959360,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/86.png",
          edition: 86,
          attributes: [
            {
              value: "Gradient 1",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Red",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Mac",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Space Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.705Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000057",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #87",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/87.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/87.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/8ca0c202769acb761d36a93f3fc040f3",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/8ca0c202769acb761d36a93f3fc040f3",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/87.png",
            format: "png",
            bytes: 4047087,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #87",
          date: 1650980960938,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/87.png",
          edition: 87,
          attributes: [
            {
              value: "Gradient 3",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Green",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Braille Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.843Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000058",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #88",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/88.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/88.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/28803d5056a7683e461cbaa7954a96e4",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/28803d5056a7683e461cbaa7954a96e4",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/88.png",
            format: "png",
            bytes: 2135567,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #88",
          date: 1650980961887,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/88.png",
          edition: 88,
          attributes: [
            {
              value: "Plain 12",
              trait_type: "Background",
            },
            {
              value: "Kid",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Violet",
              trait_type: "Body",
            },
            {
              value: "Three Cities",
              trait_type: "Stickers",
            },
            {
              value: "Braille Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.888Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000059",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #89",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/89.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/89.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/893fb2ac89bca6bdc5b552f7a12efd90",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/893fb2ac89bca6bdc5b552f7a12efd90",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/89.png",
            format: "png",
            bytes: 6444412,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #89",
          date: 1650980964049,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/89.png",
          edition: 89,
          attributes: [
            {
              value: "Mountain",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Chrome",
              trait_type: "Type Guide",
            },
            {
              value: "Turquoise",
              trait_type: "Body",
            },
            {
              value: "Seven Cities",
              trait_type: "Stickers",
            },
            {
              value: "Classic Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:04.483Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005a",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #90",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/90.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/90.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/f1873ec66c358f02c7f662ea7f9affdb",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/f1873ec66c358f02c7f662ea7f9affdb",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/90.png",
            format: "png",
            bytes: 3169046,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #90",
          date: 1650980965301,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/90.png",
          edition: 90,
          attributes: [
            {
              value: "Gradient 2",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 9",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "Strasbourg",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.234Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005b",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #91",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/91.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/91.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/b2944847f536db67e82e19d38736bc59",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b2944847f536db67e82e19d38736bc59",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/91.png",
            format: "png",
            bytes: 2518470,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #91",
          date: 1650980966326,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/91.png",
          edition: 91,
          attributes: [
            {
              value: "Plain 3",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Blood",
              trait_type: "Page",
            },
            {
              value: "Quote 8",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Chrome",
              trait_type: "Body",
            },
            {
              value: "Montpellier",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.791Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005c",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #92",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/92.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/92.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/61678bf42cefb99630d66622a607be74",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/61678bf42cefb99630d66622a607be74",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/92.png",
            format: "png",
            bytes: 5487817,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #92",
          date: 1650980968445,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/92.png",
          edition: 92,
          attributes: [
            {
              value: "Gradient 6",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Dark Red",
              trait_type: "Body",
            },
            {
              value: "Rennes",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Hot Toddy",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:02.959Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005d",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #93",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/93.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/93.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/068a72bbccbb8138c58ccec7f4510098",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/068a72bbccbb8138c58ccec7f4510098",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/93.png",
            format: "png",
            bytes: 3812126,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #93",
          date: 1650980969971,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/93.png",
          edition: 93,
          attributes: [
            {
              value: "Gradient 2",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Papyrus",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Leopard",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "Pencil",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:04.033Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005e",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #94",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/94.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/94.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a28f798f6e6a57c4376a7aa166db224b",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a28f798f6e6a57c4376a7aa166db224b",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/94.png",
            format: "png",
            bytes: 3352903,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #94",
          date: 1650980971244,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/94.png",
          edition: 94,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 7",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Wood",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "Kid",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "Coco Drink",
              trait_type: "Food Item",
            },
            {
              value: "Sunglasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.773Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x000000000000000000000000000000000000000000000000000000000000005f",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #95",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/95.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/95.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/9e0b4046116d90c16583081d6c3571cf",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9e0b4046116d90c16583081d6c3571cf",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/95.png",
            format: "png",
            bytes: 2347022,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #95",
          date: 1650980972228,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/95.png",
          edition: 95,
          attributes: [
            {
              value: "Plain 7",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Classic",
              trait_type: "Page",
            },
            {
              value: "Quote 5",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Yellow",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Blue 20 Minutes",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "Basic Glasses",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.545Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000060",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #96",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/96.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/96.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/a01a64130258bb13f8741098762ffdaa",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/a01a64130258bb13f8741098762ffdaa",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/96.png",
            format: "png",
            bytes: 2515017,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #96",
          date: 1650980973270,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/96.png",
          edition: 96,
          attributes: [
            {
              value: "Plain 9",
              trait_type: "Background",
            },
            {
              value: "Gold",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 7",
              trait_type: "Quote",
            },
            {
              value: "Silver",
              trait_type: "Type Guide",
            },
            {
              value: "Pink",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "AZERTY Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.812Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000061",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #97",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/97.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/97.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/aa226de4bd0b45b268bb0776a5372a71",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/aa226de4bd0b45b268bb0776a5372a71",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/97.png",
            format: "png",
            bytes: 2855306,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #97",
          date: 1650980974286,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/97.png",
          edition: 97,
          attributes: [
            {
              value: "Plain 11",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "Baseball Scorecard",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Bronze",
              trait_type: "Body",
            },
            {
              value: "Strasbourg",
              trait_type: "Stickers",
            },
            {
              value: "QWERTY Silver",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Gold",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:00.993Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000062",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #98",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/98.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/98.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/66d0370fccaa3af9403f460ff7cc4e73",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/66d0370fccaa3af9403f460ff7cc4e73",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/98.png",
            format: "png",
            bytes: 2222195,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #98",
          date: 1650980975248,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/98.png",
          edition: 98,
          attributes: [
            {
              value: "Plain 2",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Yellow",
              trait_type: "Page",
            },
            {
              value: "Quote 6",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Turquoise",
              trait_type: "Body",
            },
            {
              value: "Bordeaux",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Rainbow",
              trait_type: "Keyboard",
            },
            {
              value: "Silver",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Silver",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.420Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000063",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #99",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/99.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/99.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/766f925922be941ed9dfab682b0eb089",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/766f925922be941ed9dfab682b0eb089",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/99.png",
            format: "png",
            bytes: 2427370,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #99",
          date: 1650980976183,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/99.png",
          edition: 99,
          attributes: [
            {
              value: "Plain 9",
              trait_type: "Background",
            },
            {
              value: "Bronze",
              trait_type: "Carriage",
            },
            {
              value: "None",
              trait_type: "Page",
            },
            {
              value: "None",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "Wood",
              trait_type: "Body",
            },
            {
              value: "None",
              trait_type: "Stickers",
            },
            {
              value: "PC",
              trait_type: "Keyboard",
            },
            {
              value: "Gold",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.642Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
      {
        contract: {
          address: "0xb003ce92f3b2a8f3dd99207c351eaf05bc605262",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000064",
          tokenMetadata: {
            tokenType: "ERC721",
          },
        },
        title: "20 Mint Typewriter #100",
        description:
          "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
        tokenUri: {
          gateway:
            "https://alchemy.mypinata.cloud/ipfs/QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/100.json",
          raw: "ipfs://QmdFgLPpVU8Zfc44MsvrvbUZTxBPcjAXPagtbGyssSTjFH/100.json",
        },
        media: [
          {
            gateway:
              "https://nft-cdn.alchemy.com/eth-mainnet/10881e8c4699123836b023f79501681f",
            thumbnail:
              "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/10881e8c4699123836b023f79501681f",
            raw: "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/100.png",
            format: "png",
            bytes: 5316470,
          },
        ],
        metadata: {
          name: "20 Mint Typewriter #100",
          date: 1650980978469,
          description:
            "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
          image:
            "ipfs://QmUohRMA9DwzKzv53C4kQihAbpCVc7he5JfWS3UiNSGLyw/100.png",
          edition: 100,
          attributes: [
            {
              value: "Gradient 7",
              trait_type: "Background",
            },
            {
              value: "Silver",
              trait_type: "Carriage",
            },
            {
              value: "Ink",
              trait_type: "Page",
            },
            {
              value: "Quote 7",
              trait_type: "Quote",
            },
            {
              value: "Bronze",
              trait_type: "Type Guide",
            },
            {
              value: "White",
              trait_type: "Body",
            },
            {
              value: "Two Cities 3",
              trait_type: "Stickers",
            },
            {
              value: "BEPO Gold",
              trait_type: "Keyboard",
            },
            {
              value: "Bronze",
              trait_type: "Logo Ternoa",
            },
            {
              value: "Bronze",
              trait_type: "Logo 20 Mint",
            },
            {
              value: "None",
              trait_type: "Food Item",
            },
            {
              value: "None",
              trait_type: "Glasses",
            },
            {
              value: "None",
              trait_type: "Pen",
            },
            {
              value: "None",
              trait_type: "Gift",
            },
          ],
        },
        timeLastUpdated: "2023-05-07T12:02:01.946Z",
        contractMetadata: {
          name: "20 Mint Typewriter",
          symbol: "20MT",
          totalSupply: "999",
          tokenType: "ERC721",
          contractDeployer: "0x4ce199d9b671dbcce60020773e5ba5ebb1677528",
          deployedBlockNumber: 14655594,
          openSea: {
            floorPrice: 0.0545,
            collectionName: "20 Mint Typewriter",
            safelistRequestStatus: "not_requested",
            imageUrl:
              "https://i.seadn.io/gae/VxLZx2yROMG55LMRJIsBR2RWsdqE3EmWnUlJOQcvDKMQm0ItHE-N5OJjVVRjX9kzjmhiIbnDp0LccTrduA1dYyuUZhwwq1_Dbgwrpw?w=500&auto=format",
            description:
              "A collection of crazy typewriters from the mind of a mad mechanic. With tributes to the great inventors who perfected them and the artists who used them to change the world. These machines give their owners the right to pilot the largest free magazine dedicated to the web3.",
            externalUrl: "https://20mint.xyz",
            lastIngestedAt: "2023-03-20T23:55:23.000Z",
          },
        },
      },
    ],
    nextToken:
      "0x0000000000000000000000000000000000000000000000000000000000000065",
  }
  const seed = await response.nfts.forEach((nft) => {
    const newNft = prisma.nft.create({
      data: {
        Title: nft.title
      },
    })
    console.log(newNft.then((res)=>console.log(res)))
  })
}

seedtable() .then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
