// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "hardhat/console.sol";
contract Greetme {
    uint256 public totalGreet;
    mapping(address => uint) greets;

    constructor() {
        console.log("Hello");
    }

    function greet() public {
        totalGreet +=1;
        greets[msg.sender] += 1;
        console.log("%s has greeted me!", msg.sender);
    }

    function getTotalGreet() public view returns(uint256){
        return totalGreet;

    }

    function getSenderGreetCount() public view returns(uint) {
        return greets[msg.sender];
    }
}