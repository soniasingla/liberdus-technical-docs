---
sidebar_position: 1
---

# Liberdus Validator

The **Liberdus Validator** is a core component of the Liberdus network, responsible for securing consensus, validating transactions, and participating in the governance and reward system. This section covers its roles, requirements, lifecycle, risks, and operational guidelines.

## Validator Roles and Responsibilities

* Validators lock (stake) LIB tokens to earn the right to participate in block validation (consensus).
* They cycle between **active** and **standby** sets:
    - **Active set** validators perform consensus duties and earn rewards.
    - **Standby** validators wait their turn to be promoted to active state.
* Validators enforce network correctness, validate transactions, participate in block proposals, attestations, and other consensus duties.
* Validators may be penalized (slashed) for misbehavior (e.g. double signing, being offline).
* Validators also participate in on-chain governance via DAO voting and parameter updates.

## Validator Lifecycle Summary

The lifecycle of a Liberdus validator describes the sequence of states a validator node passes through, from joining the network to exiting. Understanding this lifecycle is crucial for maintaining uptime, avoiding penalties, and maximizing rewards.

### Joining the Network

- To become a validator, a node must stake the minimum required LIB tokens.
- The stake is locked in the protocol and acts as collateral, ensuring the validator behaves honestly.
- After staking, the validator enters the standby set, awaiting promotion to the active set.

### Standby Phase

- Standby validators do not participate in consensus but remain online and ready to be activated.
- Promotion to the active set is determined by the network’s Standby-to-Active (S:A) ratio, which balances the number of active validators against standby nodes.
- While in standby, validators must maintain uptime and node health, as prolonged inactivity can incur penalties or delay promotion.

### Active Phase

- Active validators perform consensus duties, including validating transactions, proposing blocks, and attesting to network events.
- During this phase, validators earn LIB rewards, distributed periodically based on active participation.
- Validators must monitor their node continuously, as downtime or misbehavior can result in slashing.

### Rotation & Standby

- Validators are periodically rotated out of the active set to give standby validators a chance to participate.
- Rotation ensures fair opportunity for all validators to earn rewards and maintain decentralization.
- After rotation, a validator returns to the standby state, ready for future activation.

### Unstaking & Exit

- Validators who wish to exit must go through a cooldown period of ~2–3 cycles.
- During this period, staked LIB remains locked to protect the network from sudden exits.
- After the cooldown, validators can withdraw their staked LIB and accrued rewards.
- Validators exiting improperly, or with insufficient stake, may incur slashing penalties.

## Governance, Parameters, and Upgradability

* Key parameters such as minimum stake, reward calculations, stable price formula, and reward intervals are governed by the **Liberdus DAO (LDAO)**.
* The **stable price oracle** uses a rolling average of LIB’s market price to make staking requirements stable in USD value.
* In case of oracle failure, the DAO can intervene to set prices manually or adjust parameters.
* The design is **permissionless** which means no centralized approval or registration is needed to become a validator, as long as staking and technical requirements are met.