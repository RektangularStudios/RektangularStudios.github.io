---
title: Plugins
keywords: Dashboard
last_updated: March 14, 2021
summary: 
sidebar: mydoc_sidebar
permalink: plugins.html
folder: white_paper/dashboard
---

All items in the dashboard are plugins. The dashboard enumerates plugins from registrations made on the DAO.

dApps may register an associated smart contract to the DAO with mutable information related to its appearing within the dashboard. 

This includes a few minimum requirements:
- Website or Attribution
- Plugin Package URI
- The contract must include a Destroy() function that allows the author to revoke it if there are bugs, or they cannot wait for quorum to approve its removal.

Updating the contract is not permitted through an Update() function. A vote is required, similar to an HFC event. This responsibility is delegated to the voting mechanism.

The dashboard can download or update plugins via their registered plugin package URI. This  allows users to interact easily with new functionality as it is released.