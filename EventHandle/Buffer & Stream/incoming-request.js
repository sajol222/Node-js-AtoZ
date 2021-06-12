const http = require('http');
const { chunk } = require('lodash');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head></html>');
        res.write('<body><h1>Welcome to this form!</h1><form method = "post" action = "/submit"><input name = "value"></input></form></body>')
        res.end();
    }
    else if(req.url === '/submit' && req.method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            console.log('Buffer Finished');
            const mainBody = Buffer.concat(body).toString();
            console.log(mainBody);
        })
    }
    else {
        res.write('Hey Not Found anything!!');
        res.end();
    }

});

server.listen(3000);
