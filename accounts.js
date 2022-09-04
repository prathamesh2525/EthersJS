const { ethers, providers } = require("ethers");

const RPC = "https://ropsten.infura.io/v3/47c53fc80cda4e28a8378649d65d5895";
const account4 = "0x2B65544A0bC70839e117E8fCB83733a033756b5f";
const privateKey =
  "91417ed7238eb9f3cc03821e1306d7031cece7d17eca24de17ce4d7a94e56150";

const provider = new ethers.providers.JsonRpcProvider(RPC);

const wallet = new ethers.Wallet(privateKey, provider);

async function call() {
  const balance = await provider.getBalance(account4);
  console.log("Before Transaction....");
  console.log(
    `Account4: ${account4} Balance:${ethers.utils.formatEther(balance)}`
  );
  console.log(
    `Account1: ${await wallet.getAddress()} Balance: ${ethers.utils.formatEther(
      await wallet.getBalance()
    )}`
  );
  const trans = await wallet.sendTransaction({
    to: account4,
    value: ethers.utils.parseEther("0.1"),
  });

  await trans.wait();
  console.log("After Transaction....");

  const balance2 = await provider.getBalance(account4);
  console.log(
    `Account4: ${account4} Balance:${ethers.utils.formatEther(balance2)}`
  );
  console.log(
    `Account1: ${await wallet.getAddress()} Balance: ${ethers.utils.formatEther(
      await wallet.getBalance()
    )}`
  );

  console.log(trans);
}

call();
