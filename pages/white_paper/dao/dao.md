---
title: Decentralized Autonomous Organization (DAO)
keywords: DAO
last_updated: March 14, 2021
summary: 
sidebar: mydoc_sidebar
permalink: dao.html
folder: white_paper/dao
list_images: '/assets/images/illustrations/draculi_1080.jpg,/assets/images/illustrations/laurence_the_duelist_1080.jpg,/assets/images/illustrations/iscara_the_ten_thousand_guns_1080.jpg,/assets/images/illustrations/alpha_draculi_1080.jpg'
---

The Novellia platform exposes a set of distinct contract whitelists for each multiverse. These whitelists enumerate the content authorized to interact with dApps related to its respective multiverse. This is an opt-in policy for dApps, but conformance to an API is necessary for autonomous extension and approval of community content.

dApps are not required to register if they are only consumers. They can provide their own core functionality or be closed source. A dApp is incentivized to register on-chain smart contracts or NFTs for interoperability with other consumers.

dApps may register to multiple multiverses, but assets may incidentally fail to generalize to other multiverses except when using a purely consumer model. This is the case for an exchange.

Proposals to mutate a multiverse's whitelist are restricted to that multiverse. A voter must own assets registered to a multiverse to vote on proposals relevant to it. This ownership is defined by the existence of an NFT in the voter's wallet. All voting is done with the Novellia (NVLA) token to avoid a fractured economy.

This supports the creation of a never-ending story, or multiverse, without allowing for degradation of content. Examples of this use-case include fan fiction, story based games with a continuous canon such as card games, and games with many extensions that need to be canonicalized (MMOs with many popular story directions).

A nominal proposal registration fee prevents sybil attacks. It also incentivizes active voting, as the fee is paid to participants.

Assets registered on the DAO do not extend the DAO. They may interact as they are designed to, but this is not facilitated as a function of the DAO, nor does the DAO take on the security burden. This separation of affairs means that one might want to register multiple contracts for a single functionality, or suggest revisions to existing contracts.

The dashboard application supports a standard API for contracts to implement, allowing them to appear on it, but this is not explicitly supported by the DAO. Other hub-like applications may define their own APIs.

**The DAO supports minimal functionality for consensus purposes**
- Adding or updating of smart contracts.
- The removal of smart contracts.
- Upgrading the DAO itself to a new smart contract.
