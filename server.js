const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> { //creates server

//set header
res.setHeader('content-type', 'text/html'); //type html

let path = './views/';

switch(req.url){
    case '/' :
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;  //redirect status
        res.setHeader('location', '/about'); //set the location as given
        break;
    default : 
    path += '404.html';
    res.statusCode = 404;
    break;
}

fs.readFile(path, (err, data) => {   //for routing
    if(err){
        console.log(err);
        res.end();
    } else {
       res.write(data);
       res.end();
    }
})

// fs.readFile('./views/index.html', (err, data) => { //to send html
//     if(err){
//         console.log(err);
//         res.end();
//     } else {
//        res.write(data);
//        res.end();
//     }
// })

})

server.listen(5000, 'localhost', ()=> {  //listening for req
    console.log('listening for request');
})