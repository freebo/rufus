//Hardcode value for now
var do_conversion = (usd, callback) => {
        callback(undefined, {
        aud_amount: (usd / 0.78)
    });
}

module.exports = {
    do_conversion
}