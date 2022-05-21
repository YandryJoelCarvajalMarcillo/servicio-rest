require('dotenv').config()
const Server=  require('./server');
const express = require('express');
const server = new  Server();
server.listen();
const app = express();


