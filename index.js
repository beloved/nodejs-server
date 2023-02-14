//import http

const http = require('http');

//create server 

const server = http.createServer((req, res) => {
    console.log('Server created');
})

//initialize PORT 

const PORT = '4000';

//listen to server

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
