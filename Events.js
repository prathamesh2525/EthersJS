const { ethers, providers } = require("ethers");

// Importing ABI - another method...
const transfer = require("./transfer.json");
const ABI = transfer.abi;

const RPC = "https://ropsten.infura.io/v3/47c53fc80cda4e28a8378649d65d5895";

const provider = new ethers.providers.JsonRpcProvider(RPC);

const contractAddress = "0x1c4f7DA8d3f62D88A41Ea0FFB17245FE30f0c8Cb";

const trans = contract.filter

async function call() {
    const contract = new ethers.Contract(contractAddress, ABI, provider);

    const transactions = await contract.queryFilter("transactions");
    transactions.map((item) => {
        console.log(
            item.args.to,
            ":",
            ethers.utils.formatEther(item.args.amount)
        );
    });
}

call();
