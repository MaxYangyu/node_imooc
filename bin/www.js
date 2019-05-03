const http = require('http');
const serverHandle = require('../app.js');
const PROT = 3000;

const server = http.createServer(serverHandle);

server.listen(PROT)