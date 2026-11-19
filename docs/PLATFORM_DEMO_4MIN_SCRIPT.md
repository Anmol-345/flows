# FLOWS Platform Demo (4-Minute Script)

**Target Duration:** 4:00 minutes  
**Audience:** Developers, Web3 Community, Potential Users  
**Goal:** Demonstrate complete FLOWS platform functionality - condensed version

---

## ðŸŽ¬ SECTION 1: Wallet Connection & Dashboard (0:00 - 0:50)

### [0:00 - 0:25] **Connect Wallet & Introduction**

**VISUAL:**
- Fade in to FLOWS app
- "Connect Wallet" button visible
- Click â†’ Wallet selector appears
- Select "Sarthak" (admin account)
- Approve connection
- Success: "ðŸ‘¤ Sarthak" appears in header

**NARRATION:**
> "Welcome to FLOWS - real-time token streaming on Vara. Let me show you the complete platform. First, I'll connect my admin wallet - Sarthak. Connected!"

**ON SCREEN TEXT:**
- "ðŸŒŠ FLOWS Platform Demo"
- "Admin Account: Sarthak"

---

### [0:25 - 0:50] **Dashboard Overview**

**VISUAL:**
- Dashboard loads showing:
  - GROW Balance: 0.00
  - Vault Balance: 0.00
  - Inflows: 0 streams
  - Outflows: 0 streams
  - Net Flow: 0.00 GROW/sec

**NARRATION:**
> "Here's the dashboard - your streaming control center. GROW balance shows tokens in my wallet. Vault balance is for streaming. Inflows and outflows track active streams. Everything's at zero because we're starting fresh. Let's get some tokens."

**VISUAL TRANSITION:**
- Click "GROW Token" in sidebar

---

## ðŸª™ SECTION 2: GROW Token Operations (0:50 - 2:30)

### [0:50 - 1:15] **Mint GROW Tokens**

**VISUAL:**
- GROW Token page loads
- Wizard at top: âœ… Get GROW â†’ Approve â†’ Deposit â†’ Stream
- "Faucet" tab active
- Enter amount: "10000"
- Click "Mint GROW"
- Sign transaction
- Success: "âœ… Minted 10,000 GROW"

**NARRATION:**
> "The GROW Token page guides us through setup. Step one: mint tokens from the faucet. I'll mint 10,000 GROW... transaction signed... done! 10,000 GROW tokens in my wallet."

---

### [1:15 - 1:35] **Approve & Deposit**

**VISUAL:**
- Click "Approve" tab
- Amount: "10000"
- Click "Approve Vault"
- Sign â†’ Success: "âœ… Vault approved"
- Click "Vault" tab
- Amount: "10000"
- Click "Deposit"
- Sign â†’ Success: "âœ… Deposited 10,000 GROW"

**NARRATION:**
> "Step two: approve the vault to access my tokens. Approved. Step three: deposit to the vault. This vault holds all streamable funds. Depositing 10,000 GROW... done! My vault now has 10,000 GROW ready to stream."

**VISUAL:**
- Vault balance updates: "10,000 GROW"

---

### [1:35 - 2:00] **Admin Panel - Faucet Settings**

**VISUAL:**
- Click "Admin" tab
- Admin Panel appears
- Faucet Mode toggle: "Whitelist Only" â†’ "Public"
- Success: "âœ… Faucet set to Public"
- Whitelist section visible below
- Add test wallet address: "0x1234...5678"
- Click "Add"
- Success: "âœ… Address whitelisted"

**NARRATION:**
> "As token admin, I can manage the faucet. I'll switch from Whitelist Only to Public mode - now anyone can mint test tokens. I can also whitelist specific addresses. Let me add my test wallet address... added."

---

### [2:00 - 2:30] **Show Empty Test Wallet**

**VISUAL:**
- Split screen or switch to test wallet view
- Test wallet dashboard shows:
  - GROW Balance: 0.00
  - Incoming Streams: (0) - "No incoming streams yet"
  - Outgoing Streams: (0)

**NARRATION:**
> "Before creating a stream, here's the test wallet dashboard. Zero balance, no streams - completely empty. Now let's stream to this wallet from the admin account."

**VISUAL TRANSITION:**
- Switch back to admin account

---

## ðŸŒŠ SECTION 3: Create Stream & Live Updates (2:30 - 3:30)

### [2:30 - 3:00] **Create Stream**

**VISUAL:**
- Click "Streams" in sidebar
- Click "+ Create Stream"
- Form appears:
  - Recipient: "0x1234...5678" (test wallet)
  - Token: GROW
  - Flow Rate: "100 GROW/hr"
  - Duration: "24 hours"
  - Initial Deposit: "2400 GROW" (auto-calculated)
- Click "Create Stream"
- Sign transaction
- Success: "âœ… Stream #1 created!"

**NARRATION:**
> "I'll create a stream. Recipient: my test wallet. Flow rate: 100 GROW per hour. Duration: 24 hours. The platform calculates the deposit needed - 2,400 GROW. Creating stream... success! Stream ID number 1 is live."

---

### [3:00 - 3:30] **Stream Appears & Live Counter**

**VISUAL:**
- Switch to test wallet dashboard
- Page refreshes/updates
- Incoming stream appears:
  - Stream #1
  - From: Sarthak
  - Rate: 100 GROW/hr
  - Streamed: 0.156 GROW (live counter incrementing)
  - Started: 2 minutes ago

**NARRATION:**
> "Switch to the test wallet - and there it is! The stream is live. From Sarthak, streaming at 100 GROW per hour. Watch the 'Streamed' amount - it's updating every second. 0.156... 0.157... 0.158 GROW. This is real-time streaming."

**VISUAL HIGHLIGHT:**
- Circle the live counter
- Show it incrementing in real-time

---

## ðŸ” SECTION 4: On-Chain Verification (3:30 - 3:50)

### [3:30 - 3:50] **Verify on Vara IDEA Explorer**

**VISUAL:**
- Open new tab: Vara IDEA Explorer
- Search bar shows StreamCore program ID
- Paste: "0xabcd...ef12"
- Program page loads
- Recent messages show:
  - CreateStream (2 minutes ago) âœ… Success
- State shows:
  - Total Streams: 1
  - Active Streams: 1

**NARRATION:**
> "Let's verify this on-chain. I'll open the Vara IDEA explorer and search for our StreamCore contract. Here it is - you can see the CreateStream transaction from 2 minutes ago, marked successful. The contract state shows 1 active stream. Everything is on-chain and verifiable."

---

## ðŸŽ¯ SECTION 5: Conclusion (3:50 - 4:00)

### [3:50 - 4:00] **Recap & CTA**

**VISUAL:**
- Quick montage:
  - Dashboard with updated balances
  - Live streaming counter
  - Vara explorer confirmation
- Fade to FLOWS logo

**NARRATION:**
> "That's FLOWS. We connected a wallet, minted and deposited tokens, configured the admin panel, created a live stream, watched real-time updates, and verified everything on-chain. Per-second token streaming on Vara - live now."

**ON SCREEN:**
```
âœ… Wallet Connected
âœ… Tokens Minted & Deposited  
âœ… Admin Settings Configured
âœ… Stream Created & Live
âœ… On-Chain Verified

ðŸŒ app.FLOWS.xyz
ðŸ“š docs.FLOWS.io
ðŸ’» github.com/FLOWS

Built with ðŸ’™ on Vara
```

**VISUAL:**
- Fade to black
- End

---

## ðŸŽ¥ Production Notes

### Timing Breakdown (4:00 total)
- **Section 1:** Wallet & Dashboard (0:50) - 21%
- **Section 2:** GROW Token Ops (1:40) - 42%
- **Section 3:** Create Stream (1:00) - 25%
- **Section 4:** On-Chain Verify (0:20) - 8%
- **Section 5:** Conclusion (0:10) - 4%

### Key Differences from 5:45 Version

**Removed/Condensed:**
- Extended dashboard tour â†’ Quick overview
- Separate approve/deposit steps â†’ Combined narration
- Detailed admin panel walkthrough â†’ Quick toggle demo
- Extended stream appearance â†’ Focused on live counter
- Detailed explorer navigation â†’ Quick verification only
- Long recap â†’ Brief montage

**Time Savings:**
- Dashboard: -20 seconds
- Token operations: -35 seconds
- Stream creation: -15 seconds
- Verification: -25 seconds
- Conclusion: -20 seconds
- **Total saved:** 1:45 minutes

### Recording Tips

**Faster Pace:**
- Speak slightly faster (140-150 WPM vs 120-140)
- Reduce pauses between actions
- Speed up transaction waits (1.5x in post)
- Combine related steps

**Visual Efficiency:**
- Use split screen more (admin + test wallet)
- Quick transitions (0.3s vs 0.5s)
- Less time on static screens
- Emphasize key moments only

**Audio:**
- Tighter music cuts
- Fewer sound effects
- Faster narration delivery
- No dead air

### What to Emphasize

**Critical Moments (don't rush):**
- Live counter incrementing (10 seconds)
- Stream creation success (5 seconds)
- On-chain verification (10 seconds)

**Speed Through:**
- Form filling
- Button clicking
- Transaction signing
- Page transitions

---

## ðŸŽ¬ Condensed Shot List

### Shot 1: Intro + Wallet (0:00-0:25)
- Title card â†’ Connect wallet â†’ Success
- **Duration:** 25 seconds

### Shot 2: Dashboard (0:25-0:50)
- Full dashboard view â†’ Navigate to GROW
- **Duration:** 25 seconds

### Shot 3: Mint (0:50-1:15)
- Faucet tab â†’ Mint transaction â†’ Success
- **Duration:** 25 seconds

### Shot 4: Approve & Deposit (1:15-1:35)
- Approve tab â†’ Deposit tab â†’ Both done
- **Duration:** 20 seconds

### Shot 5: Admin Panel (1:35-2:00)
- Admin tab â†’ Toggle mode â†’ Add whitelist
- **Duration:** 25 seconds

### Shot 6: Empty Test Wallet (2:00-2:30)
- Switch to test wallet â†’ Show empty state
- **Duration:** 30 seconds

### Shot 7: Create Stream (2:30-3:00)
- Stream form â†’ Fill details â†’ Create
- **Duration:** 30 seconds

### Shot 8: Live Stream (3:00-3:30)
- Test wallet updates â†’ Live counter highlight
- **Duration:** 30 seconds

### Shot 9: Verify (3:30-3:50)
- Explorer â†’ Search â†’ Show result
- **Duration:** 20 seconds

### Shot 10: Outro (3:50-4:00)
- Montage â†’ Logo â†’ URLs
- **Duration:** 10 seconds

**Total: 4:00 minutes (10 shots)**

---

## âœ… Quick Pre-Production Checklist

### Must-Haves
- [ ] Admin wallet (Sarthak) with VARA for gas
- [ ] Test wallet with address copied
- [ ] Platform deployed and working
- [ ] Vara IDEA explorer accessible
- [ ] Screen recording software ready (1080p, 60fps)
- [ ] Voiceover script practiced for timing

### Nice-to-Haves
- [ ] Background music selected
- [ ] Text overlay templates prepared
- [ ] Logo animations ready
- [ ] End screen graphics created

---

## ðŸ“Š Success Metrics

**Video Performance:**
- 1,500+ views in first week
- 70%+ watch completion
- 50+ likes/comments
- 15%+ CTR to platform

**Platform Impact:**
- 300+ new wallet connections
- 500+ token mints
- 100+ streams created
- 30+ SDK installs

---

## ðŸŽ¨ Visual Style

**Pacing:** Fast but clear  
**Transitions:** Quick fades (0.3s)  
**Effects:** Minimal - only highlight key moments  
**Text:** Brief overlays for key stats only  
**Colors:** Match brand (teal, dark navy)

---

## ðŸ”Š Audio Guide

**Voiceover:**
- Tone: Energetic, professional
- Pace: Fast (140-150 WPM)
- Energy: High throughout
- Clarity: Crisp and clear

**Music:**
- Style: Upbeat electronic
- Volume: -20dB (quiet background)
- Cuts: Match section changes

**Sound Effects:**
- Success chimes (3-4 total)
- Click sounds (minimal)
- No transition whooshes (too slow)

---

**Script Version:** 1.0 (4-Minute Condensed)  
**Duration:** 4:00 minutes  
**Based On:** PLATFORM_DEMO_VIDEO_SCRIPT.md (5:45)  
**Last Updated:** 2026-02-27  
**Status:** Ready for Production ðŸŽ¬

