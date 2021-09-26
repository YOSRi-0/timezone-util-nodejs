const moment = require('moment-timezone');

moment.tz.setDefault('Africa/Tunis');

let targetTimezone;

if (process.argv.length < 3) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit();
}
else {
    targetTimezone = process.argv[2];
}


const formattedTime = moment().tz(targetTimezone).format('hh:mma');

console.log(`The time in the ${targetTimezone} timezone is ${formattedTime}`);