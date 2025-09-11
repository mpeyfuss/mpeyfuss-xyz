---
title: "Send And Receive: Raffle"
tags: tech
date: 2025-09-10
image: /assets/og/send_and_receive_raffle.png
card: /assets/card/send_and_receive_raffle.png
layout: layout.njk
published: true
---
![Send & Receive: Raffle](/assets/og/send_and_receive_raffle.png)

# Send And Receive: Raffle

*A variant of the Send And Receive contract primitives that implements a raffle mechanism*

## A Brief Reminder of Send And Receive Contracts

As a reminder, I created a class of contracts that I called "Send And Receive". The whole purpose of these contracts is to take some action on the receipt of an ERC-1155 contract. They started off as a new take on "Burn and Redeem" contracts, but evolved into something much more fun.

[Read more here.](/tech/send-and-receive)

## The Raffle Variant

When constructing the new suite of contracts, I realized that some issues arise in scenarios where there is a high demand, but limited supply.

The best mechanism I came up with was a raffle option. Allowlists are anti-thetical to Send And Receive as a concept, and anything else had too much centralization for my liking.

The entire flow looks something like this:
1. The raffle owner sets up a raffle contract, passing in all the required data, but most importantly the hashed secret seed that will be used as the randomness seed after entries have concluded.
2. User then enter the raffle by sending an ERC-1155 token to the contract. Users are entered once into the raffle.
3. After the entry period, the raffle owner reveals the secret seed for the randomness.
4. Users can then see if they won or not. At that point, they can either claim the reward token OR they reclaim their entry token.

The hardest part was coming up with a system that was gas efficient and fair.

Naive ways of picking winners would involve costly computations onchain that may even fail with enough entrants. With a bit of math and going back and forth with our AI overlords, I came up with a solution that I'm calling "virtual shuffling".

![Virtual shuffle](/assets/content/virtual_shuffle.png)

### The Math

We use Affine Permutations to calculate what your spot in a shuffled list would be, but we don't actually store that information onchain permanently. It's not needed, because Affine Permutations are deterministic. 

This gets us O(1) complexity and something that is incredibly gas efficient!

Here's the math for anyone interested:

*f(i) = (A * i + B) % N*

*A* and *B* are calculated based on the randomness seed, and are based on the number of entries (*N*). *A* must be coprime with *N*, making this mapping a bijection, which maps each input to a unique output.

### But how is this fair?

Armed with the math, we can see how the system is fair, even if you know the secret seed. As the number of entries increase, *A* and *B* with each entry.

That means that the seed isn't the *only* thing that determines randomness, but rather entries are contributing to the randomness as well. 

This makes it so that no one can really know the outcome until the entries have closed and the seed is revealed.

### What happens if the owner doesn't reveal the seed?
Great question. We built this in a way where after 48 hours, anyone can cancel the raffle and participants can reclaim their entries. This helps avoid abadoned raffles.

## Where can I learn more?

The current version of these contracts can be found [here](https://github.com/Transient-Labs/tl-send-and-receive).

I'd love to hear your feedback! Feel free to reach out on [Twitter](https://x.com/mpeyfuss) or anywhere else.