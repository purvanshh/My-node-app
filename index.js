const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
  
    if (req.url === '/login') {
      res.write('<html> <head> <title>Login Page</title> </head> <body> <h1>Login Page</h1> </body> </html>');
    } else {
      res.write('<html> <head> <title>My First Web Server</title> </head> <body> <h1>Hello, world!</h1> </body> </html>');
    }
    res.end();
  });

const port = 3000;
const host = 'localhost';
server.listen(port,host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
