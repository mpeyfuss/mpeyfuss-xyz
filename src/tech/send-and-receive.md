---
title: Send & Receive Contract Deep Dive
tags: tech
date: 2025-06-10
image: /assets/og/send_and_receive.png
card: /assets/card/send_and_receive.png
layout: layout.njk
published: true
---
![Send & Receive Contract Deep Dive](/assets/og/send_and_receive.png)

# Send & Receive Contract Deep Dive

*A different take on burn & redeem contracts that are more flexible and safer for users.*

## A Brief Perspective on Burn & Redeem Contracts

Creating a universal Burn & Redeem (BnR) contract that works with any standard [ERC-1155](https://www.coinbase.com/learn/crypto-glossary/what-is-erc-1155) or [ERC-721](https://www.coinbase.com/learn/crypto-glossary/what-is-erc-721) token is a bit of a challenge. It's not really a techincal challenge, but rather a challenge to build a good user experience (UX).

When designing a system for any token, the clear path would be to design a system where you make use of the [approval functionality](https://eips.ethereum.org/EIPS/eip-721) present in each token standard. In this scenario, the user would need to send two separate transactions - he first to approve the BnR contract to move the NFTs out of your wallet and the second to burn them and mint you the redemption token.

You can see this flow below:

![burn and redeem contract flow](/assets/content/bnr_flow.png)

Of course, with improvements to Ethereum, such as [EIP-7702](https://eip7702.io/), it's becoming easier to batch these transactions so it feels like one step from the user. However, I would argue that there is a more important reason to rethink this approach - security.

The less secure part of this proposed flow is that as a user, you are typically calling the `setApprovalForAll` function on the token contract. This allows the operator to move any of your tokens on your behalf. Of course, this is perfectly fine for secure contracts, and a lot of the time, you are perfectly safe with this mechanism. 

Yet, there is always the risk of a bug being found or a contract being upgraded with a bug. This would cause issues as those with approvals still set could be vulnerable. We've seen a few cases like this in the ecosystem and it's a reason why [Revoke](https://revoke.cash) exists.

I think we can do better if we look at the standards a bit closer.

## Send & Receive Contract

I was thinking about the ERC-1155 and ERC-721 standards while on a phone call with [Derek Edws](https://x.com/derekedws) and I don't know why but at that moment, it hit me - why don't users just send their tokens to a contract and in the same transaction, they can receive the new token.

It seemed simple, yet it had never struck me so clearly even though I had seen some implementations get close, such as Manifold's Burn & Redeem contract for their ERC-1155 contracts. That's just part of building - sometimes the eureka moment hits you at random times and you just gotta flow with it.

The flow for the user would now look like this:

![send and receive contract flow](/assets/content/snr_flow.png)

In this implementation, users don't need to approve any contracts or set up an EIP-7702 authorization on their wallet. 

Users just simply send their tokens to an address, either through their wallet, OpenSea, or anywhere else that supports sending tokens. Wallets like Rabby and MetaMask can even show you what you are sending and receiving in the transaction simulation so you know you are getting the redemption token right then and there.

Additionally, it's possible to configure the contract to require more than one token be sent in for the redemption. So you could require that either a user redeems 2 of token A *or* 5 of token B for a single redemption token.

This becomes powerful for large collections where a deflationary supply is an intriguing mechanic for creator and collectors alike.

Overall, this feels like a win for user experience, security, and onchain flexibility.

## Where can I learn more?

The first version of these contracts can be found [here](https://github.com/Transient-Labs/tl-send-and-receive). As of writing this post, I've only implemented the Send & Receive contract for ERC-1155 tokens, however, this could be implemented for ERC-721 tokens as well.

It's also important to note that the contracts are only set up to mint tokens from a Transient Labs ERC-1155 creator contract, however, I may build more universal methods in the future to allow any standard ERC-1155 to be redeemable.

I'd love to hear your feedback! Feel free to reach out on [Twitter](https://x.com/mpeyfuss) or anywhere else.