---
sidebar_position: 2
---

import ValidatorStakeCalculator from '@site/src/components/ValidatorStakeCalculator';

# Staking

Validators secure the Liberdus network by staking LIB tokens as collateral, ensuring honesty and commitment to network integrity. By participating in staking, validators maintain eligibility to validate transactions and earn rewards, while risking a portion of their staked tokens if they act maliciously or remain offline. This page explains how Liberdus validators join the network, maintain eligibility, and manage staked LIB tokens.

## Validator Lifecycle

The lifecycle of a Liberdus validator describes the sequence of states a validator node passes through, from joining the network to exiting. Understanding this lifecycle is crucial for maintaining uptime, avoiding penalties, and maximizing rewards.

1. **Joining the Network** – Stake the minimum required LIB tokens to register.  
2. **Standby Phase** – Remain online and healthy while awaiting activation.  
3. **Active Phase** – Perform consensus duties and validate transactions.  
4. **Rotation & Standby** – Rotate out of the active set back into standby.  
5. **Unstaking & Exit** – Complete cooldown, then withdraw your stake and rewards.

Maintaining uptime and reliability throughout this lifecycle is essential to avoid penalties.

## Minimum Stake Requirement

- Validators must stake the **minimum USD-equivalent** value in LIB (currently around **$2,000**).  
- The exact token amount adjusts automatically via the **stable price oracle**.  
- Staked LIB serves as collateral for validator performance and network integrity.

<ValidatorStakeCalculator />

## Unstaking and Exit

- After rotation, validators enter a **cooldown period** of approximately **2–3 cycles**.  
- During cooldown, the stake remains **locked** for network security.  
- Once the cooldown completes, validators can **withdraw** both their stake and any pending rewards.  
- Early exits or protocol violations can trigger **slashing penalties**.

## Key Notes

- The staking amount and cooldown parameters are subject to protocol updates.  
- Always ensure node uptime to avoid missed rewards or penalties.  
- Backup validator keys and staking credentials securely before starting.