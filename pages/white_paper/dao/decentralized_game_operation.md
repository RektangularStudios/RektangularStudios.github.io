---
title: Decentralized Game Operation
keywords: DAO
last_updated: March 14, 2021
summary: 
sidebar: mydoc_sidebar
permalink: decentralized_game_operation.html
folder: white_paper/dao
---

In the initial stage of development, Occulta Novellia replaces Hydra with an authoritative server model. This is abstracted such that the backend can easily be upgraded as decentralization features become available.

This section is designed based on the current version of Hydra and does not consider alternative designs such as sharding.

The play model makes sense for Occulta Novellia and similar turn-based games. The process may also be extensible to other dApp variants. We do not attempt to discuss them here.

To initiate a match, a player is required to send the NFTs they are using to a locking contract. This automatically returns the NFTs when a match is completed. This prevents the player from starting multiple matches using the same NFTs, decreasing the prevalence of bots and other sybil attacks.

**When a match is started**
- The initial state is check-pointed onto the L1 Cardano blockchain.
- A Hydra head is opened for cheaper transactions.
- If consensus fails within the Hydra head, it is ejected back to the L1 Cardano blockchain to determine the result. This creates another checkpoint.
- If a player leaves the game and pausing is allowed for asynchronous play the Hydra head ejects after a period of time. The Hydra head needs to be reopened before a time set at the match's inception or the match is forfeited.

Players must manually trigger changes to the game state since smart contracts do not execute autonomously.

Gameplay is defined in a transcriptable manner like tournament Chess. Turns in Occulta Novellia are issued one turn per transaction. Each turn may include multiple actions which build a queue.

