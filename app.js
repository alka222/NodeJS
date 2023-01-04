const http = require('http');

const Server= http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();

    res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title><head>');
    // res.write('<body><h1>Hello from My Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();


    if(req.url === '/home'){
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Welcome to Home!</h1></body>');
        res.write('</html>');
    }

    else if(req.url === '/about'){
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Welcome to About us Page!</h1></body>');
        res.write('</html>');
    }

    else if(req.url === '/node'){
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from My Node.js Server!</h1></body>');
        res.write('</html>');
    }
})

Server.listen(4000);