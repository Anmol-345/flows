# FLOWS V2 â€” Protocol Specification

## Overview

FLOWS is a generalized money streaming protocol. A **stream** is a continuous, per-second transfer of fungible tokens from a sender to a receiver. Streams are fully on-chain, composable, and programmable.

---

## Core Concepts

### Stream

A stream is defined by:
- **Sender** â€” the account funding the stream
- **Receiver** â€” the account accruing tokens
- **Token** â€” the fungible token being streamed (e.g., USDC)
- **Flow Rate** â€” tokens per second (in smallest unit, e.g., micro-USDC)
- **Deposit** â€” total tokens deposited to fund the stream
- **Buffer** â€” remaining deposit available to sustain the stream

### Flow Rate Accounting

At any point in time `t`, the total amount streamed is:

```
total_streamed = settled_amount + (flow_rate Ã— (t - last_update))
```

Where `settled_amount` is the cumulative tokens accounted for at `last_update`.

The **withdrawable balance** for the receiver is:

```
withdrawable = min(total_streamed, deposited) - withdrawn
```

The **remaining buffer** for the sender is:

```
remaining_buffer = deposited - total_streamed
```

### Solvency Model

Every active stream must maintain a minimum buffer:

```
min_buffer = flow_rate Ã— min_buffer_seconds
```

If `remaining_buffer < min_buffer`, the stream becomes eligible for **liquidation** â€” any actor can call `Liquidate` to pause it, preventing the receiver from being owed tokens that don't exist.

This ensures:
- Receivers are always paid what they're owed (up to the deposit)
- No negative balances or uncollateralized promises
- Clear, predictable risk model for all parties

### Settlement

Settlement happens lazily â€” the `streamed` field is only updated when:
- The stream is updated (flow rate change)
- The stream is stopped or paused
- The receiver withdraws
- Liquidation is triggered

Between settlements, `total_streamed` is computed on-the-fly from the flow rate and elapsed time.

---

## Stream Lifecycle

```
                  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                  â”‚   Created    â”‚
                  â”‚   (Active)   â”‚
                  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                         â”‚
              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
              â–¼          â–¼          â–¼
        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
        â”‚  Update  â”‚ â”‚ Pause  â”‚ â”‚   Stop   â”‚
        â”‚ (Active) â”‚ â”‚(Paused)â”‚ â”‚(Stopped) â”‚
        â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”¬â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
             â”‚            â”‚           â–²
             â”‚            â–¼           â”‚
             â”‚      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”‚
             â”‚      â”‚  Resume  â”‚      â”‚
             â”‚      â”‚ (Active) â”‚      â”‚
             â”‚      â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜      â”‚
             â”‚           â”‚            â”‚
             â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                         â”‚
                    â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”
                    â”‚Liquidate â”‚
                    â”‚ (Paused) â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### States
- **Active** â€” tokens are flowing at `flow_rate` per second
- **Paused** â€” flow is halted; can be resumed by sender (or after topping up buffer)
- **Stopped** â€” permanently ended; remaining buffer returned to sender

### Actions
- **CreateStream** â€” sender starts a new stream with initial deposit
- **UpdateStream** â€” sender changes flow rate (settles accrual first)
- **PauseStream** â€” sender halts flow temporarily
- **ResumeStream** â€” sender resumes paused stream
- **StopStream** â€” sender permanently ends stream; refund issued
- **Deposit** â€” sender adds tokens to extend the stream
- **Withdraw** â€” receiver claims accrued tokens
- **Liquidate** â€” anyone can pause a stream below minimum buffer

---

## Token Vault

The TokenVault contract holds all deposited tokens in escrow:

- **Deposit** â€” tokens transferred from sender to vault
- **Allocate** â€” vault earmarks tokens for a specific stream
- **Release** â€” on stream stop, unstreamed tokens returned to sender's vault balance
- **Transfer** â€” on receiver withdraw, tokens sent from vault to receiver

The vault supports **emergency pause** (admin-only) to halt all operations in case of discovered vulnerabilities.

---

## Permissions

The PermissionManager allows senders to delegate stream management to third-party apps:

- **CreateStream** â€” app can create streams on behalf of sender
- **UpdateStream** â€” app can adjust flow rates
- **StopStream** â€” app can stop streams
- **DepositOnBehalf** â€” app can add deposits
- **FullAccess** â€” all of the above

Permissions can have expiration timestamps and are revocable at any time.

---

## Splits (V2+)

The SplitsRouter enables one-to-many distribution:

- A **SplitGroup** defines N recipients with weights
- When funds are distributed to a group, they are split proportionally
- Use cases: revenue sharing, team payouts, referral splits

---

## Supported Tokens

MVP launches with **USDC** on Vara. The architecture is token-agnostic â€” any fungible token program on Vara can be used by specifying its `ActorId`.

---

## Security Invariants

1. `withdrawn â‰¤ streamed â‰¤ deposited` at all times
2. Streams auto-pause when buffer drops below threshold
3. Only sender can create/update/stop; only receiver can withdraw
4. TokenVault holds all funds in escrow â€” no direct transfers between users
5. Emergency pause halts all vault operations
6. Permission delegations are explicit, scoped, and revocable

