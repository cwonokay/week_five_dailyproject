const moment = require("moment");
const chalk = require("chalk");

let hour         = 60 * 60 * moment().format("H");
let minute       = 60 * moment().format("m");
let second       = moment().format("s");
let totalSeconds = hour + minute + parseInt(second);

console.log("It is" +" "+ chalk.blue(moment().format('LLLL')) + " .");
console.log("It is" + " "+ chalk.green(moment().format('DDD'))+" " + "day of the year.");
console.log("It is" + " "+ chalk.red(totalSeconds)+" " + "into the day." );
if (moment().isDST()=== true) {
console.log("It is" + " " + chalk.yellow( moment([2017, 8, 14]).isDST()) + " " + " August 14, 2017 is during Daylight Savings Time.");
}else {
    console.log("It is" + " " + chalk.yellow( moment([2017, 8, 14]).isDST()) + " " + " August 14, 2017 is during Daylight Savings Time.");
  }
if (moment().isLeapYear()=== false) {
  console.log("It is" + " " + chalk.red( moment([2001]).isLeapYear()) + " " + " August 14, 2017 is not a leap year.");
}else {
  console.log("It is" + " " + chalk.red( moment([2001]).isLeapYear()) + " " + " August 14, 2017 is not a leap year.");
}
