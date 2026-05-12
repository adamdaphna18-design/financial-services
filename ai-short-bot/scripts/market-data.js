require("dotenv").config();
const axios = require("axios");

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const SYMBOL = "NVDA";

async function fetchPE() {
  if (!ALPHA_VANTAGE_API_KEY || ALPHA_VANTAGE_API_KEY === "your_key_here") {
    throw new Error("Missing ALPHA_VANTAGE_API_KEY in .env");
  }
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${SYMBOL}&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const response = await axios.get(url);
  const pe = parseFloat(response.data.PERatio);
  if (isNaN(pe)) {
    throw new Error(`Invalid P/E response: ${response.data.PERatio}`);
  }
  return pe;
}

// Replace with a real short interest API (e.g., Financial Modeling Prep)
// For Week 2, we'll require a real endpoint. If none available, throw error.
async function fetchShortInterest() {
  // TODO: Replace with actual API call (e.g., IEX Cloud, FMP)
  // For now, we require the user to provide a mock via environment? No – error.
  throw new Error("Short interest API not implemented. Please add real data provider in Week 3.");
}

async function getMarketSignals() {
  const pe = await fetchPE();
  const shortInterest = await fetchShortInterest();
  return {
    symbol: SYMBOL,
    pe,
    shortInterest,
    timestamp: new Date().toISOString(),
  };
}

if (require.main === module) {
  getMarketSignals()
    .then(console.log)
    .catch(err => { console.error("ERROR:", err.message); process.exitCode = 1; });
}

module.exports = { getMarketSignals };
