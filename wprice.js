const yargs = require('yargs');

var config = require('./config');
const convert_aud = require('./convert_aud');

const {mongooose} = require('./db/mongoose');
const {Price} = require('./db/pricemodel');

const binance = require('node-binance-api');
binance.options({
  'APIKEY': config.api_key,
  'APISECRET': config.api_secret 
});

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




// binance.prices(function(ticker) {
    binance.prices((ticker, error) => {
    var usd = ticker[argv.ticker] * ticker.BTCUSDT;
    console.log('USD$', usd.toFixed(3));
    convert_aud.do_conversion(usd, (error, results) => {
    console.log('AUD$', results.aud_amount.toFixed(3))
    console.log("Price of", argv.ticker, ticker[argv.ticker]);
    });
    var price = new Price ({
        ticker: argv.ticker,
        value: ticker[argv.ticker],
        pricedAt:  new Date().getTime()
        });
    price.save().then((user) => {
        console.log('Saved');
        return price.save();
    }).catch ((e) => {
        console.log('An error occured', e)
    });
});


binance.prevDay(argv.ticker,(prevDay, symbol) => {
  //console.log(symbol+" previous day:", prevDay);
  console.log(symbol, "change since yesterday:"+prevDay.priceChangePercent+"%")
});


// BTCUSDT