var bitcore = require("bitcore-lib");
var Insight = require("bitcore-explorers").Insight;

var privateKey = new bitcore.PrivateKey('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');

var utxo = {
  "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
  "outputIndex" : 0,
  "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
  "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
  "satoshis" : 50000
};


const insight = new Insight();
insight.getUnspentUtxos(address, (err, utxos) => {
   if (err) console.log("Error:", err);
   else {

    var transaction = new bitcore.Transaction()
                          .from(utxo)
                          .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000) //sending .00015BTC
                          .change(address)
                          .serialize()
                          .fee(50000) //gas price
                          .sign(privateKey);
  
   }
});

console.log(transaction.toObject());