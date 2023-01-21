const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greetme", function () {
  async function deployContractAndSetVariables() {
    const Greetme = await ethers.getContractFactory("Greetme");
    const greetme = await Greetme.deploy();
    const owner = ethers.provider.getSigner(0);
    const greeter = ethers.provider.getSigner(1);
    //const address = await signer.getAddress();

    return { greetme, owner, greeter };
  }
  it("Should greet and increment the total greet count", async function () {
    const { greetme, owner, greeter } = await loadFixture(
      deployContractAndSetVariables
    );
      console.log(await greeter.getAddress());
      await greetme.connect(greeter).greet();
      expect( await greetme.connect(greeter).getTotalGreet()).to.equal(1);
      await greetme.connect(greeter).greet();
      expect( await greetme.connect(greeter).getSenderGreetCount()).to.equal(2);

  });
});