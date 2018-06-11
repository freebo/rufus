var config = require('../config');

const yargs = require('yargs');
const traverse = require('traverse');
const binance = require('node-binance-api');
binance.options({
  'APIKEY': config.api_key,
  'APISECRET': config.api_secret 
});


//const convert_aud = require('./convert_aud');
//const sms = require('./sms');

// convert_aud.do_conversion(usd, (error, aud_amount) => {
//     console.log('Converted ', aud_amount)

// });

const argv = yargs
    .options({
        p: {
            default: 30,
            alias: 'percent',
            describe: 'Percentage Change'
        }
    })
    .help()
    .alias('help','h')
    .argv;


    binance.prices((ticker, error) => {
    //sconsole.log(JSON.stringify({ticker},undefined,2));
    traverse(ticker).forEach(function(value) {
         if (this.isLeaf) {
                if (value < 0.00002 ) {
                var key = this.key;
                console.log('1', key, value);
              }
         }
    });
});