const { ethers } = require("ethers");

const networkConfig = {
  3141: {
    name: "hyperspace",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
