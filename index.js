const moment = require("moment");
const chalk = require("chalk");

    console.log("It is" +" "+ chalk.blue(moment().format('LLLL')) + " .");
    console.log("It is" + " "+ chalk.green(moment().format('DDD'))+" " + "day of the year.");


console.log("It is" + " " + chalk.yellow( moment([2017, 8, 14]).isDST()) + " " + " August 14, 2017 is during Daylight Savings Time.");
console.log("It is" + " " + chalk.red( moment([2001]).isLeapYear()) + " " + " August 14, 2017 is not a leap year.");
