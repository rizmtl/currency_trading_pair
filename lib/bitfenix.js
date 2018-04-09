const http = require("http");
const request = require("request");

let BitFenix = class {
  constructor() {
    this.symbol = "BTCUSD";
    this.bitFenixHost = "https://api.bitfinex.com";
    this.pubTickerUrl = "v1/pubticker/";
    this.url = `${this.bitFenixHost}/${this.pubTickerUrl}/${this.symbol}`;
  }

  getUrl() {
    return this.url;
  }

  getPrice(callback) {
    request(this.getUrl(), (err, res, body) => {
      if (err) {
        console.log("Failed to get price", err);
        return new Error("Failed to get price");
      }

      if (res.statusCode != 200) {
        callback(new Error("Failed to get price"));
      }

      if (!body) {
        callback(new Error("No Data Found"));
      }
      callback(null, body);
    }); 
  } 
}

module.exports = BitFenix;

