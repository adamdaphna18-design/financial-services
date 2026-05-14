const { getMarketSignals } = require("./market-data");

const SHORT_PE_THRESHOLD = 40;
const SHORT_INTEREST_THRESHOLD = 15;

async function shouldShort() {
  const signals = await getMarketSignals();
  const { pe, shortInterest } = signals;
  const decision = (pe > SHORT_PE_THRESHOLD && shortInterest > SHORT_INTEREST_THRESHOLD);
  return { decision, signals };
}

if (require.main === module) {
  shouldShort()
    .then(({ decision, signals }) => {
      console.log(`📊 Signals: P/E=${signals.pe}, Short Interest=${signals.shortInterest}%`);
      console.log(decision ? "🔻 SHORT signal triggered" : "✅ No short signal");
    })
    .catch(err => { console.error("ERROR:", err.message); process.exitCode = 1; });
}

module.exports = { shouldShort };
