
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerBalance = await deployer.getBalance();
  
  console.log("Deploying with account: ", deployer.address);
  console.log("Deployer account balance: ", deployerBalance.toString());

  const Greetme = await ethers.getContractFactory("Greetme");
  const greetme = await Greetme.deploy();
  await greetme.deployed();
  console.log("Greetme deployed at address: ", greetme.address);
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
