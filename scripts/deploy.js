// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 
  const winnerContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const EventWinner = await hre.ethers.getContractFactory("EventWinner");
  const eventWinner = await EventWinner.deploy();

  await eventWinner.deployed();

  console.log(`contract is deployed to ${eventWinner.address}`);

  const tx = await eventWinner.callWinner(winnerContractAddress);
  console.log(tx);
}

//Deployed Event Winner Contract Address 
// https://goerli.etherscan.io/address/0xb7e309973cd06895aae8cb899ffea991db4eb853

//Winning Attempt Trasaction
//https://goerli.etherscan.io/tx/0x29ea706d3d4d45fd9d4c6b66f314e330b65aa63d77aa0739725a26e6e38767ed


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

Compiled 1 Solidity file successfully
contract is deployed to 0x92b9C9D788B6CBa82231D1BfEBb17859036e0978
{
  hash: '0xc721a3532f04fb43467186c9e564e58bdac73375c86dbcc7fee29d26f08ae5fd',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,    // https://goerli.etherscan.io/block/8795274
  transactionIndex: null,
  confirmations: 0,
  from: '0xA2B0D877a212CD0a52833d05D2edD50Aa89B22e9',
  gasPrice: BigNumber { value: "295274311637" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "295274311637" },
  gasLimit: BigNumber { value: "26098" },
  to: '0x92b9C9D788B6CBa82231D1BfEBb17859036e0978',
  value: BigNumber { value: "0" },
  nonce: 3,
  data: '0xbef097e2000000000000000000000000cf469d3beb3fc24cee979eff83be33ed50988502',
  r: '0x89a3e67dc1ca15fae07fd3e8da1e4ea4be598a7741c60cf0e01376d8535b54dc',
  s: '0x318711170bfad1d3708720dbe8494063f85131a56c30c5367e71d0085b61b438',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}

*/