const btc = require("bitcore-lib");

//creating a wallet

//generating randon number buffer
const buffer = btc.crypto.Random.getRandomBuffer(32),
      rand = btc.crypto.BN.fromBuffer(buffer);

//creating wallet from rand as private key
const address = new btc.PrivateKey(rand).toAddress(),
      address_ = address.toString();

console.log("Wallet successfully created");
console.log("Wallet address", address_);