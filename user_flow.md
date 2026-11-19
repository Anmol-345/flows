Here's the complete user flow from wallet connect to money received, mapped to the actual API endpoints on your live deployment:

---

## FLOWS User Flow: Wallet Connect â†’ Money Received

### Flow 1: Direct Money Streaming (Sender â†’ Receiver)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ 1. Connect  â”‚â”€â”€â”€â”€â–¶â”‚ 2. Deposit   â”‚â”€â”€â”€â”€â–¶â”‚ 3. Create   â”‚â”€â”€â”€â”€â–¶â”‚ 4. Receiver  â”‚
â”‚    Wallet   â”‚     â”‚    Tokens    â”‚     â”‚    Stream   â”‚     â”‚   Withdraws  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| Step | Who | Action | API Endpoint | What Happens |
|------|-----|--------|-------------|-------------|
| **1** | Sender | Connect SubWallet/Polkadot.js | *Frontend only* | Gets `actorId` (SS58 address) from wallet extension |
| **2** | Sender | Deposit tokens into vault | `POST /api/vault/deposit` `{ token, amount, mode: "payload" }` | Returns encoded payload â†’ wallet signs â†’ tokens locked in TokenVault escrow |
| **3** | Sender | Create a stream to receiver | `POST /api/streams` `{ receiver, token, flowRate, initialDeposit, mode: "payload" }` | Returns payload â†’ wallet signs â†’ stream starts, tokens flow at `flowRate` per second |
| **4** | Receiver | Check withdrawable balance | `GET /api/streams/:id/balance` | Shows how much has accrued in real-time |
| **5** | Receiver | Withdraw accrued tokens | `POST /api/streams/:id/withdraw` `{ mode: "payload" }` | Returns payload â†’ wallet signs â†’ tokens transferred from vault to receiver |

### Flow 2: Bounty-Based Streaming (Creator â†’ Developer)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Connect  â”‚â”€â”€â–¶â”‚ Create   â”‚â”€â”€â–¶â”‚ Dev      â”‚â”€â”€â–¶â”‚ AI Score â”‚â”€â”€â–¶â”‚ Stream   â”‚â”€â”€â–¶â”‚ Dev      â”‚
â”‚ Wallet   â”‚   â”‚ Bounty   â”‚   â”‚ Claims   â”‚   â”‚ Verify   â”‚   â”‚ Starts   â”‚   â”‚Withdraws â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| Step | Who | Action | API Endpoint |
|------|-----|--------|-------------|
| **1** | Creator | Connect wallet | *Frontend* |
| **2** | Creator | Fund vault | `POST /api/vault/deposit { token, amount, mode: "payload" }` |
| **3** | Creator | Create bounty | `POST /api/bounty { title, token, maxFlowRate, minScore, totalBudget, mode: "payload" }` |
| **4** | Developer | Connect wallet + bind GitHub identity | `POST /api/identity/bind { actorId, githubUsername, proofHash, score }` |
| **5** | Developer | Claim bounty | `POST /api/bounty/:id/claim { mode: "payload" }` |
| **6** | Oracle/Admin | AI scores GitHub work â†’ verify | `POST /api/bounty/:id/verify { claimer, score }` |
| **7** | *Auto* | Stream starts from creator â†’ developer | Stream created on-chain at flow rate proportional to score |
| **8** | Developer | Withdraw earned tokens | `POST /api/streams/:id/withdraw { mode: "payload" }` |

### Flow 3: Revenue Splitting (Team Payouts)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Connect  â”‚â”€â”€â–¶â”‚ Create   â”‚â”€â”€â–¶â”‚ Deposit  â”‚â”€â”€â–¶â”‚ Distributeâ”‚
â”‚ Wallet   â”‚   â”‚ Split    â”‚   â”‚ Tokens   â”‚   â”‚ to Team  â”‚
â”‚          â”‚   â”‚ Group    â”‚   â”‚          â”‚   â”‚          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| Step | Who | Action | API Endpoint |
|------|-----|--------|-------------|
| **1** | Admin | Create split group with weighted recipients | `POST /api/splits { recipients: [{address, weight}, ...], mode: "payload" }` |
| **2** | Admin | Preview distribution | `GET /api/splits/:id/preview/:amount` |
| **3** | Admin | Distribute tokens to all recipients | `POST /api/splits/:id/distribute { token, amount, mode: "payload" }` |

### The `mode: "payload"` Pattern (Critical for Frontend)

Every mutation endpoint supports two modes:

**Server-signed** (for backend/oracle calls):
```javascript
// No mode param â€” server signs with its own key
const result = await fetch('/api/streams', {
  method: 'POST',
  body: JSON.stringify({ receiver, token, flowRate: '1000', initialDeposit: '3600000' })
});
// Returns: { result, blockHash }
```

**Client-signed** (for user wallet interactions):
```javascript
// mode: "payload" â€” returns hex payload for wallet signing
const { payload } = await fetch('/api/streams', {
  method: 'POST',
  body: JSON.stringify({ receiver, token, flowRate: '1000', initialDeposit: '3600000', mode: 'payload' })
}).then(r => r.json());

// Frontend signs with user's wallet extension
const { signer } = await web3FromSource(account.meta.source);
const tx = api.message.send({ destination: STREAM_CORE_ID, payload, gasLimit, value: 0 });
await tx.signAndSend(account.address, { signer });
```

### Frontend Integration Checklist

| Component | API Endpoint | Purpose |
|-----------|-------------|---------|
| **Wallet Connect** | â€” | SubWallet / Polkadot.js extension |
| **Dashboard** | `GET /health` | Show connected contracts + balance |
| **Stream List** | `GET /api/streams/sender/:addr` | User's outgoing streams |
| **Stream Detail** | `GET /api/streams/:id` | Status, flow rate, balances |
| **Create Stream** | `POST /api/streams` (mode=payload) | New stream form |
| **Manage Stream** | `POST /api/streams/:id/pause\|resume\|stop` | Stream controls |
| **Vault Balance** | `GET /api/vault/balance/:owner/:token` | Show deposited tokens |
| **Deposit/Withdraw** | `POST /api/vault/deposit\|withdraw` | Manage vault |
| **Bounty Board** | `GET /api/bounty/open` | List available bounties |
| **Bounty Detail** | `GET /api/bounty/:id` | Bounty info + claim |
| **Identity** | `GET /api/identity/github/:username` | GitHub â†’ on-chain identity |
| **Splits** | `GET /api/splits/:id` | Revenue split groups |

All endpoints are live at **`https://FLOWS-core-production.up.railway.app`** â€” 59/59 tests verified on-chain.
