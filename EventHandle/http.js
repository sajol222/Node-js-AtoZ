const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hey programmers!');
        res.write('Hey , what are you doing!');
        res.end();
    }
    else if(req.url === '/home'){
        res.write('Hey programmers!');
        res.end();
    }
    else {
        res.write('Hey Not Found anything!!');
        res.end();
    }

});

server.listen(3000);
console.log('server listening on 3000');