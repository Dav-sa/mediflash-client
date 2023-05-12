# Ternoa-test

TL:DR

David Sabri's technical assessment for the position of developer at Ternoa.

1. First page displays the NFT from the 20 mint collection
2. A user can authenticate with metamask
3. When authenticated, the user can like an NFT
4. Fourth page displays the addresses that liked an NFT

## The stack

- NextJS
- TypeScript
- TailwindCSS
- [Shadcn UI](https://ui.shadcn.com/) components
- Clerk for the web3 authentication
- React-query for data-fetching
- React-testing library and Cypress for the tests

## Details

### The "fetch NFT"+pagination feature

- Everything starts with a basic "fetch and display"
- I've used the alchemy SDK before so I knew they had methods to fetch NFTs, I used the "getNftsForContract" and passed the contract address.
- React-query makes this easy, I just had to wrap the function in a "useQuery" hook.
- I then passed the result to a paginate helper function, and then mapped the data to display the NFTs.

### The authentication feature

- I love exploring new tools, and recently I discovered Clerk
- It is an authentication tool that offers various ways of authenticating, and Metamask is one of them.
- They have

### The "like NFT" feature
