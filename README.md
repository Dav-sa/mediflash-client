# Chainxplorer

![image](https://user-images.githubusercontent.com/68847199/229071916-d0dab12a-6171-4df5-8cc4-736a9bca9371.png)

TL:DR

Chainxplorer is a blockchain explorer that allows you to search for a token, an address, or a block. It also displays the latest block info and the latest crypto prices. [See the demo here](
https://chainxplorer.vercel.app )

1. First page displays latest crypto prices
2. Second page displays latest block info
3. Third page displays the NFTS of an address
4. Fourth page displays the erc20 tokens of an address

![image](https://user-images.githubusercontent.com/68847199/229072407-1b3a27ec-16c4-4b2f-a24b-ffc3ce7b734c.png)


## The stack

- NextJS
- TypeScript
- TailwindCSS
- [Shadcn UI](https://ui.shadcn.com/) components
- Ethers and Alchemy SDK for the blockchain interaction
- React-query for data-fetching

![image](https://user-images.githubusercontent.com/68847199/229072503-cdde06aa-aa42-46af-b277-5c740c532981.png)


## Things I learned

- React-query is great, it deals with server-state, caching, errors, I feel like i've only been scratching its surface.
- NextJS's file based routing system is awesome.
- I feel like I'm not using Next's rendering system to its full potential.
- I was skeptical about inline style with tailwind but after this project I don't see myself going back to css-in-js or css modules for personnal projects.
- Alchemy's sdk is awesome, it's very easy to use and it's well documented.

## Things I want to improve

- Ethers.js felt hard to use at first.
- Testing coverage with React-testing-library and Jest.
- Adding pagination to NFT page. 
- Maybe try to dockerize the app and deploy it on a VPS.
- While I'm at it, setting up a CI/CD pipeline with Github Actions could be nice.
