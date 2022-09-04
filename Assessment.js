// Contract Address: 0x2e70D53f23AE4dFa57e0c43CE39ffEfFBB2A8Ad8

const { ethers, providers } = require("ethers");

// Importing ABI - another method...
const transfer = require("./Auction.json");
const ABI = transfer.abi;

const RPC = "https://ropsten.infura.io/v3/47c53fc80cda4e28a8378649d65d5895";

const provider = new ethers.providers.JsonRpcProvider(RPC);

const contractAddress = "0x2e70D53f23AE4dFa57e0c43CE39ffEfFBB2A8Ad8";

async function call() {
    const contract = new ethers.Contract(contractAddress, ABI, provider);

    console.log(`Address of Beneficiary: ${await contract.beneficiary()}`);
    console.log(`Highest Bidder: ${await contract.highestBidder()}`);
    console.log(`Highest Bid: ${await contract.highestbid()}`);
    console.log(`Auction End Time: ${await contract.auctionEndTime()}`);

    const getHighestBidIncreased = await contract.queryFilter(
        "highestBidIncreased"
    );
    getHighestBidIncreased.map((item) => {
        console.log(`
            Highest Bidder Address: ${item.args.bidder}
            Bidding Amount: ${ethers.utils.formatEther(item.args.amount)}
        `);
    });

    const getAuctionEnded = await contract.queryFilter("auctionEnded");
    getAuctionEnded.map((item) => {
        console.log(` 
        Winner: ${item.args.winner}
        Amount: ${ethers.utils.formatEther(item.args.amount)}`);
    });
}

call();
