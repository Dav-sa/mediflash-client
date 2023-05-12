# Ternoa-test

TL:DR

David Sabri's technical assessment for the position of developer at Ternoa.

1. First page displays the NFT from the 20 mint collection
2. A user can authenticate with metamask
3. When authenticated, the user can like an NFT
4. The "Likes" page displays the addresses that liked an NFT

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
- Thanks to React-Query, I just had to wrap the function in a "useQuery" hook.
- I then passed the result to a paginate helper function, and mapped the data to display the NFTs.

//screenshot

### The authentication feature

- I love exploring new tools, and recently I discovered Clerk
- It is an authentication service that offers various ways of authenticating, and Metamask is one of them.
- They have components that you can just import, and it juste works out of the box
- (Maybe you did not have this in mind when you wrote the requirements but I thought it was a good idea to use it)

//screenshot

### The "like NFT" feature

- Okay so here we need to pause a bit and do some thinking. We need to store the likes somewhere because we want them to persist and we need a way to know who liked what.
- So we have to set up a database, i chose to use PlanetScale which is a hosted SQL db.
- Then we have to set up a client to interact with the db, I went for prisma.
- I created two models : User and NFT, they have a many-to-many relationship which represents the "like" feature.
-
