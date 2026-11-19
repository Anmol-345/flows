# FLOWS 21-Day Launch Campaign â€” Architecture Analysis & Implementation Plan

---

## Step 1: Repository Structure Analysis

### Top-Level Folder Structure

```
FLOWS_Backend/
â”œâ”€â”€ api/                    # Express.js REST API (deployed on Railway)
â”‚   â”œâ”€â”€ idl/                # Sails IDL files for all 7 contracts
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ index.mjs       # Express app entry point
â”‚   â”‚   â”œâ”€â”€ sails-client.mjs # Gear/Sails connection layer
â”‚   â”‚   â””â”€â”€ routes/          # 8 route modules
â”‚   â”œâ”€â”€ package.json         # express, @gear-js/api, sails-js
â”‚   â””â”€â”€ railway.json         # Railway deployment config
â”‚
â”œâ”€â”€ contracts/              # Rust smart contracts (Vara/Gear)
â”‚   â”œâ”€â”€ stream-core/        # Per-second streaming engine
â”‚   â”œâ”€â”€ token-vault/        # Token deposit/withdraw/solvency
â”‚   â”œâ”€â”€ splits-router/      # Revenue splitting
â”‚   â”œâ”€â”€ permission-manager/ # Delegated permissions
â”‚   â”œâ”€â”€ adapters/           # Bounty adapter
â”‚   â”œâ”€â”€ identity-registry/  # Wallet-GitHub identity binding
â”‚   â””â”€â”€ grow-token/         # GROW ERC-20 token
â”‚
â”œâ”€â”€ frontend/               # Next.js 15 app (Vercel)
â”‚   â”œâ”€â”€ app/                # App router pages
â”‚   â”œâ”€â”€ components/         # campaign/, v2/, ui/, provn/
â”‚   â”œâ”€â”€ lib/                # API client, github-analyzer, supabase, utils
â”‚   â”œâ”€â”€ hooks/              # useFLOWS, useVaraNFT, useProfile, etc.
â”‚   â””â”€â”€ contexts/           # VaraContext (Gear API providers)
â”‚
â”œâ”€â”€ sdk/                    # @FLOWS/sdk TypeScript package
â”œâ”€â”€ scripts/deploy-js/      # Deployment & E2E test scripts
â””â”€â”€ deploy-state.json       # 7 deployed contract program IDs
```

### Services Architecture

| Service | Tech | Deployment | Purpose |
|---------|------|------------|---------|
| **API** | Express.js (ESM) | Railway | REST gateway to smart contracts via Sails |
| **Frontend** | Next.js 15, React 19 | Vercel | Landing + Dashboard + Campaign UI |
| **Contracts** | Rust / Gear / Sails | Vara Testnet | 7 deployed programs |
| **SDK** | TypeScript | npm (local link) | Developer-facing client library |

### Database Layer

| System | Tech | What it stores |
|--------|------|----------------|
| **On-chain** | Vara Network | Streaming state, vault balances, identities, bounties |
| **Supabase** | PostgreSQL | User profiles (wallet, handle, display_name, bio, avatar) |
| **IPFS** | Pinata | Scorecard reports, NFT metadata |

**Key finding: The Express API is completely stateless.** It has NO database connection â€” it proxies all reads/writes directly to Vara contracts via Sails. Supabase is only used by the frontend for profiles. There is no PostgreSQL or Redis in the API layer.

### API Layer â€” 8 Route Modules

| Route File | Base Path | Contract |
|------------|-----------|----------|
| `health.mjs` | `/health` | All |
| `streams.mjs` | `/api/streams` | StreamCore |
| `vault.mjs` | `/api/vault` | TokenVault |
| `splits.mjs` | `/api/splits` | SplitsRouter |
| `permissions.mjs` | `/api/permissions` | PermissionManager |
| `bounty.mjs` | `/api/bounty` | BountyAdapter |
| `identity.mjs` | `/api/identity` | IdentityRegistry |
| `grow-token.mjs` | `/api/grow-token` | GrowToken |

Every POST route supports `{ mode: "payload" }` to return encoded payload for client-side wallet signing.

### Existing Integrations

| Integration | Location | Method |
|-------------|----------|--------|
| **Vara Network** | API + Frontend | @gear-js/api, Sails, WebSocket |
| **GitHub API** | Frontend `github-analyzer.ts` | REST v3 (user repos/events) |
| **Supabase** | Frontend `supabase.ts` | @supabase/supabase-js |
| **Pinata/IPFS** | Frontend `ipfs.ts` | JWT-authenticated uploads |
| **Reclaim Protocol** | Frontend hooks | ZK proof of GitHub ownership |

### Deployed Contracts

| Contract | Program ID |
|----------|-----------|
| StreamCore | `0x2e7c...0a56` |
| TokenVault | `0x7e08...254b` |
| SplitsRouter | `0xe4fe...b894` |
| PermissionManager | `0x6cce...88cb` |
| BountyAdapter | `0xd537...8f81` |
| IdentityRegistry | `0xb638...948a` |
| GrowToken | `0x05a2...fe36` |

---

## Step 2: How the Current Architecture Works

### Request Flow

```
User Browser (Next.js)
  â”‚
  â”œâ”€ Payload mode: API returns SCALE-encoded payload
  â”‚  â†’ Frontend signs with SubWallet â†’ submits tx to Vara
  â”‚
  â””â”€ Server mode: API signs with VARA_SEED keyring
     â†’ sails-client builds tx, calculates gas, signs, sends
     â†’ Returns { result, blockHash }
```

### Sails Client Layer (api/src/sails-client.mjs)

On startup:
1. Connects to Vara testnet via WebSocket
2. Loads keyring from `VARA_SEED`
3. Parses all 7 IDL files into Sails instances
4. Maps contract names â†’ program IDs from deploy-state.json
5. Exposes `query()`, `command()`, `encodePayload()`

### Frontend Architecture

- Next.js 15 App Router with React 19
- VaraContext wraps app with Gear ApiProvider + AccountProvider
- `FLOWS-api.ts` is the typed API client mirroring all backend endpoints
- Existing campaign system: ScoreCard, Leaderboard, TierBadge, PrizeBanner components
- `github-analyzer.ts` scores GitHub **users** (not individual PRs)
- `campaignUtils.ts` has tweet generation, score sorting, eligibility checks

**Critical distinction:** The existing campaign scores entire GitHub profiles. The new campaign needs to score **individual PRs and tweets**.

---

## Step 3: Extension Points

### What Must Be Added (Does Not Exist)

| Component | What's Needed |
|-----------|---------------|
| **Backend database** | PostgreSQL via Supabase for XP, contributions, events |
| **GitHub webhook handler** | `POST /api/webhooks/github` for PR events |
| **GitHub PR scoring** | Per-PR LLM scoring pipeline in API |
| **X/Twitter agent** | Filtered stream listener + content scoring |
| **XP system** | Tables: participants, contributions, xp_events |
| **Leaderboard API** | GET /api/leaderboard endpoints |
| **Cron jobs** | Daily XP, snapshots, X re-evaluation |
| **LLM integration** | OpenAI/Anthropic for scoring rubrics |

### What Can Be Extended (Already Exists)

| Component | How to Extend |
|-----------|---------------|
| **Identity Registry** | Use existing bind endpoint for registration |
| **Bounty Adapter** | Optionally trigger streams for top contributors |
| **github-analyzer.ts** | Adapt scoring weights for PR-level analysis |
| **Campaign components** | Extend for XP-based leaderboard |
| **Supabase** | Add new tables (already configured) |
| **Express API** | Add new route modules following same pattern |
| **FLOWS-api.ts** | Add campaign/leaderboard methods |

### Database Decision

**Use Supabase** (already configured in frontend with URL + keys). Add the Supabase client to the Express API. This avoids deploying a new database and gives real-time leaderboard subscriptions for free.

---

## Step 4: Clean Implementation Plan

### New Folder Structure

```
api/src/
â”œâ”€â”€ routes/
â”‚   â”œâ”€â”€ (existing 8 routes unchanged)
â”‚   â”œâ”€â”€ campaign.mjs          â† NEW: registration, config
â”‚   â”œâ”€â”€ leaderboard.mjs       â† NEW: leaderboard endpoints
â”‚   â””â”€â”€ webhooks.mjs          â† NEW: GitHub webhook handler
â”œâ”€â”€ services/                  â† NEW FOLDER
â”‚   â”œâ”€â”€ supabase.mjs          # Supabase client for API
â”‚   â”œâ”€â”€ github-agent.mjs      # GitHub PR scoring pipeline
â”‚   â”œâ”€â”€ x-agent.mjs           # X/Twitter content scoring
â”‚   â”œâ”€â”€ xp-service.mjs        # XP award/query logic
â”‚   â””â”€â”€ llm-scorer.mjs        # LLM wrapper (OpenAI/Anthropic)
â””â”€â”€ cron/                      â† NEW FOLDER
    â”œâ”€â”€ daily-xp.mjs          # Daily XP accumulation
    â”œâ”€â”€ leaderboard-snapshot.mjs # Nightly rank snapshots
    â””â”€â”€ x-reevaluate.mjs      # Re-score X posts at 6h/24h
```

### Database Schema (Supabase)

#### Table: participants

```sql
CREATE TABLE participants (
  wallet           VARCHAR(66) PRIMARY KEY,
  github_handle    VARCHAR(40) UNIQUE,
  x_handle         VARCHAR(16) UNIQUE,
  track            VARCHAR(10) NOT NULL
                   CHECK (track IN ('OSS', 'CONTENT', 'BOTH')),
  total_xp         INTEGER NOT NULL DEFAULT 0,
  registered_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_participants_xp ON participants (total_xp DESC);
CREATE INDEX idx_participants_github ON participants (github_handle);
CREATE INDEX idx_participants_x ON participants (x_handle);
```

#### Table: contributions

```sql
CREATE TABLE contributions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet           VARCHAR(66) NOT NULL REFERENCES participants(wallet),
  track            VARCHAR(10) NOT NULL
                   CHECK (track IN ('OSS', 'CONTENT')),
  external_id      VARCHAR(255) NOT NULL,
  score            INTEGER,
  xp_awarded       INTEGER NOT NULL DEFAULT 0,
  status           VARCHAR(20) NOT NULL DEFAULT 'PENDING'
                   CHECK (status IN (
                     'PENDING','ACTIVE','MERGED','CLOSED','REJECTED','DELETED'
                   )),
  agent_feedback   TEXT,
  agent_response   JSONB,
  submitted_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(track, external_id)
);

CREATE INDEX idx_contributions_wallet ON contributions (wallet);
CREATE INDEX idx_contributions_status ON contributions (status);
```

#### Table: xp_events

```sql
CREATE TABLE xp_events (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet           VARCHAR(66) NOT NULL REFERENCES participants(wallet),
  xp_delta         INTEGER NOT NULL,
  reason           VARCHAR(30) NOT NULL
                   CHECK (reason IN (
                     'INITIAL_AWARD','DAILY_ACCUMULATION','MERGE_BONUS',
                     'VIRAL_BONUS','ENGAGEMENT_BONUS','THREAD_BONUS',
                     'RESHARE_BONUS','ADJUSTMENT'
                   )),
  contribution_id  UUID REFERENCES contributions(id),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_xp_events_wallet ON xp_events (wallet);
CREATE INDEX idx_xp_events_contribution ON xp_events (contribution_id);
```

#### Table: daily_snapshots

```sql
CREATE TABLE daily_snapshots (
  snapshot_date    DATE NOT NULL,
  wallet           VARCHAR(66) NOT NULL,
  xp_at_snapshot   INTEGER NOT NULL,
  rank_at_snapshot INTEGER NOT NULL,
  PRIMARY KEY (snapshot_date, wallet)
);
```

### New API Routes

#### Registration & Campaign Config

```
POST /api/campaign/register
  Body: { wallet, github_handle?, x_handle?, track }
  â†’ Validates inputs
  â†’ INSERT INTO participants
  â†’ Returns participant record

GET /api/campaign/participant/:wallet
  â†’ Returns participant + contributions + XP history

GET /api/campaign/config
  â†’ Returns campaign dates, pool size, XP tables, rules

POST /api/campaign/payout-snapshot   (admin only)
  â†’ Locks final XP, calculates payouts for all participants
```

#### Leaderboard

```
GET /api/leaderboard?page=1&limit=50&track=OSS|CONTENT|BOTH
  Response: {
    totalParticipants, totalXP, campaignEndsIn,
    entries: [{ rank, wallet, displayName, track, totalXP,
                contributions, estimatedUSDC, rankChange, lastActive }]
  }

GET /api/leaderboard/:wallet
  Response: {
    rank, totalXP, estimatedUSDC,
    contributions: [...],
    xpHistory: [{ date, xp }]
  }

GET /api/leaderboard/stats
  Response: {
    totalParticipants, totalXP, totalContributions,
    ossContributions, contentContributions,
    topContributor, campaignDaysRemaining, poolUSDC
  }
```

#### GitHub Webhook

```
POST /api/webhooks/github
  â†’ Verify HMAC-SHA256 signature (GITHUB_WEBHOOK_SECRET)
  â†’ Parse event type from X-GitHub-Event header
  â†’ PR opened / synchronized â†’ queue for LLM scoring
  â†’ PR merged â†’ award +500 XP merge bonus
  â†’ PR closed (not merged) â†’ update status to CLOSED
```

### Service Specifications

#### services/supabase.mjs

```javascript
// Initialize Supabase client using SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
// Export getSupabase() for all services
```

#### services/llm-scorer.mjs

Two scoring functions with structured JSON output:

```javascript
// scorePR(diff, issueBody, ciStatus) â†’ { score, factors, feedback }
//   factors: { correctness: 0-30, testCoverage: 0-25, codeQuality: 0-20,
//              issueRelevance: 0-15, completeness: 0-10 }

// scoreContent(text, isThread, hasMedia, engagementData) â†’ { score, factors, feedback }
//   factors: { quality: 0-30, relevance: 0-15, originality: 0-10,
//              educationalValue: 0-20, engagement: 0-25 }
```

#### services/github-agent.mjs

Full PR scoring pipeline:

```
1. Fetch PR diff via GitHub API (GET /repos/{owner}/{repo}/pulls/{pr}/files)
2. Fetch linked issue body (GET /repos/{owner}/{repo}/issues/{number})
3. Fetch CI status (GET /repos/{owner}/{repo}/commits/{sha}/check-runs)
4. Call llm-scorer.scorePR(diff, issue, ci)
5. If score >= 70:
     â†’ Calculate XP from score tier
     â†’ Insert contribution record
     â†’ Insert xp_event (INITIAL_AWARD)
     â†’ Update participant.total_xp
     â†’ Post GitHub comment with score breakdown
6. If score < 70:
     â†’ Insert contribution with status=REJECTED
     â†’ Post GitHub comment with feedback only
7. On merge event:
     â†’ Insert xp_event (MERGE_BONUS, +500 XP)
     â†’ Update contribution status=MERGED
     â†’ Post follow-up comment
```

**GitHub comment template:**
```
ðŸ¤– FLOWS AI Review

Score: 82/100 âœ…

  Correctness:     24/30
  Test Coverage:   20/25
  Code Quality:    17/20
  Issue Relevance: 13/15
  Completeness:     8/10

Feedback: The fix correctly handles the race condition.
Consider adding a test for the concurrent access scenario.

XP Awarded: 1,200 XP â†’ 0x1234...abcd
ðŸ“Š Leaderboard: FLOWS.app/leaderboard
```

**OSS XP Table:**

| Score | Initial XP | Daily Accumulation | Merge Bonus |
|-------|-----------|-------------------|-------------|
| 70â€“79 | 700 XP | +100 XP/day | +500 XP |
| 80â€“89 | 1,200 XP | +150 XP/day | +500 XP |
| 90â€“100 | 2,000 XP | +200 XP/day | +500 XP |

#### services/x-agent.mjs

X/Twitter content scoring pipeline:

```
1. Connect to X Filtered Stream: @FLOWS OR #FLOWS -is:retweet lang:en
2. On new tweet:
     â†’ Look up author X handle in participants table
     â†’ If not registered: skip
     â†’ Fetch tweet fields + author metrics
     â†’ Calculate engagement velocity:
       velocity = (likes + retweets*2 + replies*1.5) / followerCount
     â†’ Call llm-scorer.scoreContent()
     â†’ Combined score = (llmScore * 0.65) + (engagementScore * 0.35)
     â†’ If score >= 70: award XP, insert records, reply to tweet
     â†’ Schedule re-evaluation at T+6h and T+24h
3. Re-evaluation:
     â†’ Fetch updated engagement metrics
     â†’ If score delta > 10: award bonus XP
     â†’ If post deleted: update status=DELETED
```

**X agent reply template:**
```
ðŸ¤– FLOWS verified your post!
Score: 76/100 âœ… | XP: 760
Rank: #23 (2,840 XP total)
Est. payout: ~$8.40 USDC
ðŸ“Š FLOWS.app/leaderboard
```

**Content XP Table:**

| Score | Base XP | Bonuses |
|-------|---------|---------|
| 70â€“79 | 500 XP | â€” |
| 80â€“89 | 800 XP | â€” |
| 90â€“100 | 1,200 XP | â€” |
| Thread (5+ tweets) | +30% on base | â€” |
| 500+ engagements | +800 XP | one-time |
| @VaraNetwork reshare | +500 XP | one-time |

#### services/xp-service.mjs

Centralized XP logic:

```javascript
awardXP(wallet, xpDelta, reason, contributionId)
  â†’ INSERT INTO xp_events
  â†’ UPDATE participants SET total_xp = total_xp + xpDelta

getXP(wallet) â†’ current total_xp

getLeaderboard(page, limit, track) â†’ sorted entries with rank + estimatedUSDC

getParticipantStats(wallet) â†’ contributions + xpHistory + rank

calculatePayout(wallet) â†’ (walletXP / totalXP) * 500
```

### Cron Jobs

| Job | Schedule | What It Does |
|-----|----------|--------------|
| **daily-xp.mjs** | Midnight UTC | Awards daily XP for active/merged contributions |
| **leaderboard-snapshot.mjs** | Midnight UTC | Snapshots all participant XP + ranks |
| **x-reevaluate.mjs** | Every 6 hours | Re-scores X content posts within 24h window |

### New Dependencies (api/package.json)

```json
{
  "@supabase/supabase-js": "^2.97.0",
  "openai": "^4.70.0",
  "node-cron": "^3.0.3",
  "octokit": "^4.0.0",
  "twitter-api-v2": "^1.17.0"
}
```

### New Environment Variables

```bash
# Supabase (reuse frontend project)
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# GitHub Agent
GITHUB_APP_ID=
GITHUB_APP_PRIVATE_KEY=       # base64-encoded PEM
GITHUB_WEBHOOK_SECRET=
GITHUB_REPO_OWNER=BlockXAI
GITHUB_REPO_NAME=FLOWS_Backend
GITHUB_CAMPAIGN_LABEL=stream-bounty

# X Agent
X_BEARER_TOKEN=
X_API_KEY=
X_API_SECRET=

# LLM
OPENAI_API_KEY=
LLM_MODEL=gpt-4o-mini

# Campaign Config
CAMPAIGN_START_DATE=2026-04-01
CAMPAIGN_END_DATE=2026-04-21
CAMPAIGN_POOL_USDC=500
SCORE_THRESHOLD=70

# XP Config
OSS_XP_70=700
OSS_XP_80=1200
OSS_XP_90=2000
OSS_DAILY_70=100
OSS_DAILY_80=150
OSS_DAILY_90=200
MERGE_BONUS_XP=500
CONTENT_XP_70=500
CONTENT_XP_80=800
CONTENT_XP_90=1200
```

---

## Step 5: Phased Implementation Roadmap

### Phase 1 â€” Database + XP System (Days 1â€“3)

**Goal:** Foundation â€” database, Supabase integration, XP service.

| # | Task | File | Est. |
|---|------|------|------|
| 1.1 | Create Supabase client for API | `api/src/services/supabase.mjs` | 1h |
| 1.2 | Create 4 DB tables with indexes | Supabase Dashboard / SQL | 1h |
| 1.3 | Implement XP service (award, query, leaderboard, payout) | `api/src/services/xp-service.mjs` | 3h |
| 1.4 | Registration endpoints | `api/src/routes/campaign.mjs` | 2h |
| 1.5 | Wire campaign router into Express app | `api/src/index.mjs` | 15m |
| 1.6 | Add @supabase/supabase-js dependency | `api/package.json` | 5m |
| 1.7 | Add env vars | `.env` + `.env.example` | 15m |
| 1.8 | Test: register â†’ query â†’ verify in Supabase | Manual | 1h |

**Deliverable:** Participants can register. XP can be awarded and queried.

---

### Phase 2 â€” GitHub AI Agent (Days 3â€“6)

**Goal:** Automated PR scoring via GitHub webhooks + LLM.

| # | Task | File | Est. |
|---|------|------|------|
| 2.1 | Register GitHub App, configure webhook | GitHub Dashboard | 30m |
| 2.2 | LLM wrapper with scorePR() | `api/src/services/llm-scorer.mjs` | 3h |
| 2.3 | Full PR scoring pipeline | `api/src/services/github-agent.mjs` | 6h |
| 2.4 | Webhook handler with HMAC verification | `api/src/routes/webhooks.mjs` | 2h |
| 2.5 | Wire webhooks router | `api/src/index.mjs` | 15m |
| 2.6 | Add openai + octokit dependencies | `api/package.json` | 5m |
| 2.7 | Tag 10 issues with `stream-bounty` label | GitHub Repo | 1h |
| 2.8 | Test: submit PR â†’ score â†’ GitHub comment â†’ XP in DB | Manual | 2h |

**Deliverable:** PRs get auto-scored. Score + feedback posted as comment. XP awarded if â‰¥ 70.

---

### Phase 3 â€” X/Twitter Agent (Days 6â€“9)

**Goal:** Automated content scoring for X posts.

| # | Task | File | Est. |
|---|------|------|------|
| 3.1 | Apply for X API Basic tier (do this on Day 1!) | X Developer Portal | 1h + wait |
| 3.2 | Filtered stream listener + scoring pipeline | `api/src/services/x-agent.mjs` | 6h |
| 3.3 | Add scoreContent() to LLM scorer | `api/src/services/llm-scorer.mjs` | 2h |
| 3.4 | Engagement velocity calculation | `api/src/services/x-agent.mjs` | 2h |
| 3.5 | Tweet reply with score + XP | `api/src/services/x-agent.mjs` | 1h |
| 3.6 | Re-evaluation scheduler (T+6h, T+24h) | `api/src/services/x-agent.mjs` | 2h |
| 3.7 | Add twitter-api-v2 dependency | `api/package.json` | 5m |
| 3.8 | Test: post tweet â†’ detect â†’ score â†’ reply â†’ XP | Manual | 2h |

**Deliverable:** X posts auto-scored. Reply posted. Re-evaluated at 6h/24h.

**âš ï¸ X API approval can take 1â€“5 days. Apply on Day 1.**

---

### Phase 4 â€” Leaderboard System (Days 7â€“9)

**Goal:** Public leaderboard API + frontend.

| # | Task | File | Est. |
|---|------|------|------|
| 4.1 | Leaderboard endpoints (paginated, filterable) | `api/src/routes/leaderboard.mjs` | 3h |
| 4.2 | Individual stats endpoint | `api/src/routes/leaderboard.mjs` | 2h |
| 4.3 | Aggregate stats endpoint | `api/src/routes/leaderboard.mjs` | 1h |
| 4.4 | Wire leaderboard router | `api/src/index.mjs` | 15m |
| 4.5 | Add campaign + leaderboard to API client | `frontend/lib/FLOWS-api.ts` | 2h |
| 4.6 | Update leaderboard component for XP | `frontend/components/campaign/` | 3h |
| 4.7 | Add leaderboard page route | `frontend/app/` | 2h |
| 4.8 | "Your Position" sticky card | `frontend/components/campaign/` | 2h |
| 4.9 | Test: register â†’ contribute â†’ verify rank | Manual | 1h |

**Deliverable:** Live leaderboard with rank, XP, estimated USDC payout.

---

### Phase 5 â€” Cron Jobs + Automation (Days 9â€“11)

**Goal:** Automated daily XP, snapshots, re-evaluation.

| # | Task | File | Est. |
|---|------|------|------|
| 5.1 | Add node-cron dependency | `api/package.json` | 5m |
| 5.2 | Daily XP accumulation job | `api/src/cron/daily-xp.mjs` | 3h |
| 5.3 | Nightly leaderboard snapshot | `api/src/cron/leaderboard-snapshot.mjs` | 2h |
| 5.4 | X re-evaluation job (every 6h) | `api/src/cron/x-reevaluate.mjs` | 2h |
| 5.5 | Initialize crons on server start | `api/src/index.mjs` | 30m |
| 5.6 | Add rankChange using snapshots | `api/src/routes/leaderboard.mjs` | 1h |
| 5.7 | Test all cron jobs fire correctly | Manual | 2h |

**Deliverable:** XP accumulates daily. Leaderboard shows rank trends. X posts re-scored.

---

### Phase 6 â€” Anti-Gaming + Polish + Launch (Days 11â€“14)

**Goal:** Security, edge cases, final testing.

| # | Task | File | Est. |
|---|------|------|------|
| 6.1 | Anti-gaming: reject copy-paste PRs, trivial changes | `github-agent.mjs` | 3h |
| 6.2 | Anti-gaming: detect bot content, self-engagement | `x-agent.mjs` | 3h |
| 6.3 | Payout snapshot endpoint (admin) | `campaign.mjs` | 2h |
| 6.4 | Public campaign config endpoint | `campaign.mjs` | 1h |
| 6.5 | Campaign rules page (frontend) | `frontend/app/` | 3h |
| 6.6 | Registration flow (wallet + OAuth) | `frontend/` | 3h |
| 6.7 | Animated XP ticker on dashboard | `frontend/components/` | 3h |
| 6.8 | Full end-to-end test | Manual | 3h |
| 6.9 | Update README + .env.example | Root | 2h |

**Deliverable:** Production-ready campaign with anti-gaming, polished UI, complete docs.

---

## Complete File Change Map

### 11 New Files

| File | Purpose |
|------|---------|
| `api/src/services/supabase.mjs` | Supabase client for API |
| `api/src/services/xp-service.mjs` | XP award/query/leaderboard |
| `api/src/services/llm-scorer.mjs` | OpenAI/Anthropic LLM wrapper |
| `api/src/services/github-agent.mjs` | GitHub PR scoring pipeline |
| `api/src/services/x-agent.mjs` | X/Twitter content scoring |
| `api/src/routes/campaign.mjs` | Registration + campaign config |
| `api/src/routes/leaderboard.mjs` | Leaderboard endpoints |
| `api/src/routes/webhooks.mjs` | GitHub webhook handler |
| `api/src/cron/daily-xp.mjs` | Daily XP accumulation |
| `api/src/cron/leaderboard-snapshot.mjs` | Nightly rank snapshot |
| `api/src/cron/x-reevaluate.mjs` | X post re-evaluation |

### 6 Files to Modify

| File | Changes |
|------|---------|
| `api/src/index.mjs` | Add 3 route mounts + cron init |
| `api/package.json` | Add 5 dependencies |
| `.env` / `.env.example` | Add ~25 env vars |
| `frontend/lib/FLOWS-api.ts` | Add campaign + leaderboard methods |
| `frontend/lib/campaignUtils.ts` | Add XP calc + payout helpers |

### 4 Database Tables

| Table | Rows (est.) | Primary Key |
|-------|------------|-------------|
| `participants` | ~200â€“2000 | wallet |
| `contributions` | ~500â€“5000 | uuid |
| `xp_events` | ~2000â€“20000 | uuid |
| `daily_snapshots` | ~4000â€“40000 | (date, wallet) |

### 0 Contract Changes

**No smart contract modifications required.** All campaign logic runs off-chain in the backend + database.

---

## Payout Execution (Day 21)

No contract needed. Run this query after the campaign ends:

```sql
SELECT
  wallet,
  total_xp,
  ROUND(total_xp::numeric / SUM(total_xp) OVER () * 100, 2) AS share_pct,
  ROUND(total_xp::numeric / SUM(total_xp) OVER () * 500, 2) AS usdc_payout
FROM participants
WHERE total_xp > 0
ORDER BY total_xp DESC;
```

Send USDC manually or via batch script. Post every tx hash publicly.

**Minimum payout threshold:** $1 USDC. Amounts below $1 roll into next campaign pool.

---

## Immediate Action Items (Start Today)

1. **Apply for X API Basic tier** â€” this is externally gated (1â€“5 day approval)
2. **Register GitHub App** on BlockXAI org â€” takes 15 minutes
3. **Create Supabase tables** â€” copy-paste the SQL above
4. **Add `@supabase/supabase-js`** to `api/package.json`
5. **Tag 10 GitHub issues** with `stream-bounty` label

---

**Document Version:** 1.0
**Last Updated:** 2026-03-16
**Status:** Ready for Development

