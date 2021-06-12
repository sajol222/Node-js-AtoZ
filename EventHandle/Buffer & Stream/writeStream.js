const fs = require('fs');
const { chunk } = require('lodash');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data',(chunk)=>{
    ourWriteStream.write(chunk);
})