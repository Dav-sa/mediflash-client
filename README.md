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
-  Cypress for the tests

## Details

### The "fetch NFT"+pagination feature

- Everything starts with a basic "fetch and display"
- I've used the alchemy SDK before so I knew they had methods to fetch NFTs, I used the "getNftsForContract" and passed the contract address.
- Thanks to React-Query, I just had to wrap the function in a "useQuery" hook.
- I then passed the result to a paginate helper function, and mapped the data to display the NFTs.
![image](https://github.com/Dav-sa/ternoa-test/assets/68847199/30416c72-e14c-4273-a89e-c348a1dd992e)


### The authentication feature

- I love exploring new tools, and recently I discovered Clerk
- It is an authentication service that offers various ways of authenticating, and Metamask is one of them.
- They have components that you can just import, and it juste works out of the box
- (Maybe you did not have this in mind when you wrote the requirements but I thought it was a good idea to use it)
![image](https://github.com/Dav-sa/ternoa-test/assets/68847199/3ce8ca2b-5567-4716-9564-0063cc52c0d6)



### The "like NFT" feature

- Okay so here we need to pause a bit and do some thinking. We have to store the likes somewhere because we want them to persist and we need a way to know who liked what.
- So we are going to set up a database first, i chose to use PlanetScale which is a hosted SQL db.
- Then we have to get a client to interact with the db, I went for prisma.
- I created two models : User and NFT, they have a many-to-many relationship which represents the "likes". 
- I then used the "api" feature of Next to create two endpoints: 
on the first one we associate a user to a nft, on the second one we fetch the nfts from the database and include the users that liked them.

![image](https://github.com/Dav-sa/ternoa-test/assets/68847199/ce7a85f7-a57a-4a61-a68b-0cb0e05953d4)
![image](https://github.com/Dav-sa/ternoa-test/assets/68847199/6bd6e512-6fb7-468c-93fe-d961dcccd0f6)

