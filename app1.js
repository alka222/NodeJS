const http = require('http');
const fs = require('fs');

const Server= http.createServer((req, res)=>{
    
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');


    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', "Dummy");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.write('<html')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to My Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();

})

Server.listen(3000);