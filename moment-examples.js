var moment = require('moment');
var now = moment();
/*
console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());
*/
var timeStamp = 1455887577323;
var timeStampMoment = moment.utc(timeStamp);

console.log(timeStampMoment.local().format('h:mm a')); //11:06 am
/*now.subtract(1,'year');
console.log(now.format());

console.log(now.format("MMM Do YYYY, h:mma"));*/