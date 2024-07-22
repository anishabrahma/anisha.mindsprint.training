const http=require('http');
const products= require('./products.json');
const server=http.createServer((req,res)=>{

    //write response
    //res.writeHead('200',{"content-type":"text/html"});
    //res.write('<h1>Hello From Server</h1>');
    res.write(JSON.stringify(products));
    res.end();
})

//start the server
server.listen(5000,()=>console.log('Server started'));