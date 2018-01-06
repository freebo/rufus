const yargs = require('yargs');

var config = require('./config');
const convert_aud = require('./convert_aud');

var usd = 1;
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

const binance = require('node-binance-api');
binance.options({
  'APIKEY': config.api_key,
  'APISECRET': config.api_secret 
});


// binance.prices(function(ticker) {
    binance.prices((ticker) => {
    var usd = ticker[argv.ticker] * ticker.BTCUSDT;
    console.log('USD$', usd.toFixed(3));
    convert_aud.do_conversion(usd, (error, results) => {
    console.log('AUD$', results.aud_amount.toFixed(3))
    console.log("Price of", argv.ticker, ticker[argv.ticker]);

    });
});


binance.prevDay(argv.ticker, function(prevDay, symbol) {
  //console.log(symbol+" previous day:", prevDay);
  console.log(symbol, "change since yesterday:"+prevDay.priceChangePercent+"%")
});

// BTCUSDT