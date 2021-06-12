const fs = require('fs');
const { chunk } = require('lodash');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// console.log(ourReadStream);

ourReadStream.on('data',(chunk)=>{
    console.log(chunk);
})
console.log('sajol vai !')