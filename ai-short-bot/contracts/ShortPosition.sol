// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Week 1 placeholder – no shorting logic yet.
// Real implementation will come in later weeks.
contract ShortPosition {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // TODO: Add short position management (e.g., collateral, price feeds, liquidation)
    function executeShort() external pure returns (string memory) {
        return unicode"Mock short execution – ready for real logic in Week 2+";
    }
}
