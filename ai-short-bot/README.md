# AI Short Bot – Week 1 Scaffolding

**Purpose**: Placeholder for an autonomous AI agent that shorts overvalued AI stocks / crypto assets based on market signals (Michael Burry thesis).

## Current Scope (Week 1)
- ✅ Project structure
- ✅ Placeholder smart contract (`ShortPosition.sol`)
- ✅ Mock data script (`mock-data.js`)
- ✅ Mock execution script (`trigger-short.js`)
- ✅ GitHub Actions for compilation (Ethereum + Solana)
- ❌ No real trading, no live APIs, no execution

## How to run (mock only)
```bash
npm install
npm run mock      # shows fake signals
npm run trigger   # prints "would execute short"
```

Next Weeks

· Week 2: Add real valuation feeds (P/E, short interest)
· Week 3: Deploy to Sepolia/devnet
· Week 4: Automatic execution via cron + GitHub Actions

Environment

Copy .env.example to .env (values not used yet, but required for Hardhat).
