//import ethers
const { ethers } = require("hardhat");

async function main() {
    const nftContract = await ethers.getContractFactory("GameItem");

    //deploy contract
    const deployedNFTContract = await nftContract.deploy();

    //print address of deployed contract
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

//call main function and catch errors/if any
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.errir(error);
        process.exit(1);
    });