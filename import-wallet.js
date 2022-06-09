const btc = require("bitcore-lib");

//importing wallet from private key

//creating a private key

var privateKey = new btc.PrivateKey(),
    exportable = privateKey.toWIF();

console.log("Wallet Import Format:", exportable);

//generated private key WIF is: L4NHqVMgier2LaaCvHr16qV9VKR2biCXJYVxJ3dgx8BGHNj1gB8Y

//validating private key

 const wif = "L4NHqVMgier2LaaCvHr16qV9VKR2biCXJYVxJ3dgx8BGHNj1gB8Y",
       imported = btc.PrivateKey.fromWIF(wif); //as private key

console.log("Private Key: ", imported.toString());

const public_key = imported.toPublicKey(), //creating public key
      wallet_address = public_key.toAddress(btc.Networks.livenet);

console.log("Public Key:", public_key.toString());
console.log("Wallet Address:", wallet_address.toString());

//if () console.log("Valid private key")
//  else console.log("Invalid private key");