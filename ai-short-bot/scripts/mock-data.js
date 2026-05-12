// Mock market data – returns hardcoded values to simulate AI shorting thesis
require("dotenv").config();

function getMockSignals() {
  return {
    nvidiaPE: 75,               // >30 considered overvalued
    aiSentiment: "extreme_greed",
    marketTrend: "hyperbolic",
    recommendation: "SHORT",
    timestamp: new Date().toISOString(),
  };
}

if (require.main === module) {
  console.log(JSON.stringify(getMockSignals(), null, 2));
}

module.exports = { getMockSignals };
