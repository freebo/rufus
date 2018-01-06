var config = require('./config');

const yargs = require('yargs');
const traverse = require('traverse');
const binance = require('node-binance-api');
binance.options({
  'APIKEY': config.api_key,
  'APISECRET': config.api_secret 
});


const convert_aud = require('./convert_aud');
const sms = require('./sms');

// convert_aud.do_conversion(usd, (error, aud_amount) => {
//     console.log('Converted ', aud_amount)

// });

const argv = yargs
    .options({
        t: {
            default: 'TRXUSD', 
            alias: 'ticker',
            describe: 'Ticker',
            string: true
        },
        p: {
            default: 10,
            alias: 'percent',
            describe: 'Percentage Change'
        }
    })
    .help()
    .alias('help','h')
    .argv;


binance.prices(function(ticker) {
    //console.log(JSON.stringify({ticker},null,2));
    traverse(ticker).forEach(function(value) {
         if (this.isLeaf) {
             var key = this.key;
            //console.log(key, value);
            binance.prevDay(key, (prevDay, symbol) => {
                //console.log(symbol+" previous day:", prevDay);
                //console.log(symbol, "change since yesterday:"+prevDay.priceChangePercent+"%")
                if (prevDay.priceChangePercent > argv.percent) {
                    if ((symbol.substr(symbol.length - 3)) === 'BTC') {
                        console.log(symbol, "change since yesterday:"+prevDay.priceChangePercent+"%","price", value,"Volume");
                    }
                }
            });
         };
    });
});