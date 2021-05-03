---
title: Minting NFT's
keywords: Dashboard
last_updated: March 14, 2021
summary: 
sidebar: mydoc_sidebar
permalink: minting_nfts.html
folder: white_paper/dashboard
list_images: '/assets/images/illustrations/draculi_1080.jpg,/assets/images/illustrations/laurence_the_duelist_1080.jpg,/assets/images/illustrations/iscara_the_ten_thousand_guns_1080.jpg,/assets/images/illustrations/alpha_draculi_1080.jpg'
---

There is a standard contract for designing NFT assets, specifically for Occulta Novellia. Other dApps may implement their own standard, or copy ours.

**This contract is required to support at a minimum**
- Returning NFTs in exchange for Novellia (NVLA) deposits
- Be immutable

While asset pricing in Novellia (NVLA) is not strictly enforced by the DAO, voting for such contracts would be disincentivized, since voters hold Novellia (NVLA). Game theory dictates they would be devaluing their own assets.

These contracts are registered on the DAO so they cannot be duplicated. Clones would simply fail to be voted into the DAO, preserving the value of rare NFTs, while allowing easy deployment of welcome additions. This maintains a registry of origin for NFTs.

Most NFTs such as playable characters in Occulta Novellia are minted according to a discrete probability distribution, with infinite supply. The fixed Novellia (NVLA) cost combined with its increasing fiat value induces rarity over time, as it becomes infeasible to purchase more NFTs from the minter. The Novellia (NVLA) price is adjusted by a function with respect to the number of NFTs minted for a given contract. This stops the creator of a minter from purchasing their own NFTs at net zero cost. There are also limited edition NFTs which are minted with finite supply contracts.

As it becomes available, we may allow oracles to denominate asset prices in a stable coin. The developers avoid this as it would cause old NFTs to suddenly become worthless if the value of USD rapidly depreciated. The instability of Novellia (NVLA) is a necessary poison, and would become a non-issue as it grew in market-cap to become stable in value.

There may be limited edition collectibles wearing Santa hats, for example, minted around the winter holidays. Stay tuned for Draculi variants.
