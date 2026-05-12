const { ethers } = require("hardhat");
const { shouldShort } = require("./signal");
require("dotenv").config();

async function main() {
  console.log("🔍 Evaluating short signal...");
  const { decision, signals } = await shouldShort();
  if (!decision) {
    console.log("❌ No short signal – exiting");
    return;
  }

  console.log(`🚨 SHORT signal confirmed! P/E=${signals.pe}, Short Interest=${signals.shortInterest}%`);

  // Deploy ShortPosition contract for demonstration
  console.log("📄 Deploying ShortPosition contract...");
  const ShortPosition = await ethers.getContractFactory("ShortPosition");
  const shortPosition = await ShortPosition.deploy();
  await shortPosition.waitForDeployment();
  console.log(`✅ Deployed at: ${shortPosition.target}`);

  console.log("⚡ Calling executeShort()...");
  const tx = await shortPosition.executeShort();
  await tx.wait();
  console.log(`✅ Transaction confirmed: ${tx.hash}`);
  console.log(`🔗 View on Base Sepolia: https://sepolia.basescan.org/tx/${tx.hash}`);
}

main().catch((error) => {
  console.error("❌ Execution failed:", error);
  process.exitCode = 1;
});
