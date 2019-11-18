const yargs = require('yargs');

var config = require('./config');
const convert_aud = require('./convert_aud');

const api = require('binance');
const binanceRest = new api.BinanceRest({
    key: config.api_key, // Get this from your account on binance.com
    secret: config.api_secret , // Same for this
    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
    recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false
    /*
     * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
     * default those keys will be replaced with more descriptive, longer ones.
     */
});
// binance.options({
//   'APIKEY': config.api_key, 
//   'APISECRET': config.api_secret 
// });

const currencypair = 'TRXBTC';

// convert_aud.do_conversion(usd, (error, aud_amount) => {
//     console.log('Converted ', aud_amount)

// });

const argv = yargs
    .options({
        t: {
            default: currencypair, 
            alias: 'ticker',
            describe: 'Ticker',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;


binanceRest.allOrders(() => {
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

// binance.prices(function(ticker) {
//     binanceRest.tickerPrice((ticker, error) => {
//     var usd = ticker[argv.ticker] * ticker.BTCUSDT;
//     console.log('USD$', usd.toFixed(3));
//     convert_aud.do_conversion(usd, (error, results) => {
//     console.log('AUD$', results.aud_amount.toFixed(3))
//     console.log("Price of", argv.ticker, ticker[argv.ticker]);

//     });
// });


// binanceRest.prevDay(argv.ticker,(prevDay, symbol) => {
//   //console.log(symbol+" previous day:", prevDay);
//   console.log(symbol, "change since yesterday:"+prevDay.priceChangePercent+"%")
// });

// BTCUSDT