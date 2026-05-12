// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../contracts/ShortPosition.sol";

contract ShortPositionTest is Test {
    ShortPosition public pos;

    function setUp() public {
        pos = new ShortPosition();
    }

    function test_executeShort() public {
        string memory result = pos.executeShort();
        assertEq(result, unicode"Mock short execution – ready for real logic in Week 2+");
    }
}
