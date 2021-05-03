---
title: Cards
keywords: Game
last_updated: March 14, 2021
summary: 
sidebar: mydoc_sidebar
permalink: cards.html
folder: white_paper/occulta_novellia
list_images: '/assets/images/illustrations/draculi_1080.jpg,/assets/images/illustrations/laurence_the_duelist_1080.png,/assets/images/illustrations/iscara_the_ten_thousand_guns_1080.png,/assets/images/illustrations/alpha_draculi_1080.png'
---

![Draculi Card](/assets/images/draculi_card.jpg "The Draculi are fast serpents with human-like jaws. So-named for their resemblance to vampires, their human teeth have fangs to suck blood. They prefer to live in water, leaving it with a red tint. It is not known where they go, deep within the Garden of Residues' waters."){:loading="lazy"}

## Stages

For each **class** of collectible, there are 3 stages that can be used to build a progression for a character deployed into a match.

**Stage Descriptions**
- Stage 1: These are the only characters that can be deployed at the start of a match. The others must be swapped in through gained experience. Only stage 1 characters have a squad slot and base stats.
- Stage 2: These can replace a stage 1 character once it has enough experience in a match. Upper stages replace attributes and base stats.
- Stage 3: These can replace a stage 2 character once it has enough experience in a match. Upper stages replace attributes and base stats.

Draculi is a stage 1 collectible.

There are multiple possible progressions for a class. If "Cannibal Draculi" and "Pack Draculi" are both stage 2 characters, either can be chosen as the stage 1 Draculi's progression. This must be decided prior to the start of the match during a staging phase.

If there are multiple stage 1 Draculi deployed, the player cannot use the same NFT multiple times to design both progressions. In this case, the player would need to collect multiple of each upper level NFT, and mutiple stage 1 Draculi to accompany.

This encourages collecting multiplicities of a single card, increasing market demand.

## Attributes

Attributes are stored as a string array on the NFT.

Draculi has attributes "Agile", "Swim", "Bite", which are stored as literal words on the NFT. There is no additional data to determine the definition for these words. That is the job of the game's card engine.

The attributes are interpreted into a combination of **activated** and **passive** abilities. This interpretation is subject to change based on the version of the game client, or mods, for balancing purposes.

This is a compromise. The attributes cannot be removed from the NFT itself. This preserves value: even if one interpreter version devalues the attributes, another may provide a different interpretation.

**Draculi's Attributes**
- Bite is an attack move that costs action points.
- Swim means that Draculi can move across water terrain.
- Agile gives Draculi a higher than normal chance to avoid incoming attacks.

## Slots

In Occulta Novellia, characters are deployed in squads with an average capacity of 4 slots, but this can vary for each map. The slots stat indicates how much space Draculi takes within a squad.

**Slots typically range from 1-4, with the following categories**
- 1 Slot: Generic or weaker characters such as Draculi, Grevan Rifleman, Phanamite Autoneer.
- 2 Slots: Heroes or leaders such as Iscara, Thomas, Laurence, Garret.
- 3 Slots: Brutes, heavy hitters, or large creatures such as Raptor, Arinspore.
- 4 Slots: Legendary or very powerful units such as Iskadiel, Ten Thousand Guns, Phanasmac.

If a player needs to fill a squad of capacity 4, they might choose 4 Draculi, or 1 Draculi and 1 Arinspore.

## Base Stats

These are stored as mandatory integers on the NFT. There may also be **extended stats** which determine the degree of ability related to certain attributes.

**Categories**
- Health indicates how much damage Draculi can take before dying.
- Each squad shares a fixed number of action points. These do not regenerate fully every turn, but recover slowly. This means if one character performs too many actions in a turn, another character in the same squad has insufficient action points to do anything. Move indicates how many action points it costs for every hex tile the character crosses.
- Attack indicates how much damage Draculi deals, multiplied by an integer associated with its bite move. The multiplier is not stored on the NFT, so it can be altered for balancing purposes.
