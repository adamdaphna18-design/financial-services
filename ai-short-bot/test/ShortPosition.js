const { expect } = require("chai");

describe("ShortPosition", function () {
  it("should return mock message", async function () {
    const ShortPosition = await ethers.getContractFactory("ShortPosition");
    const pos = await ShortPosition.deploy();
    await pos.waitForDeployment();
    expect(await pos.executeShort()).to.equal("Mock short execution – ready for real logic in Week 2+");
  });
});
