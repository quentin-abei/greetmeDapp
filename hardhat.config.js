require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    /*mainnet: {
      url: process.env.PROD_GOERLI_URL,
      accounts: [process.env.PROD_PRIVATE_KEY],
    },*/
  },
};
