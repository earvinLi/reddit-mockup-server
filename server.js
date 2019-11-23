// External dependencies
const express = require('express');

const server = express();
server.use(express.json());

server.listen(8081, () => console.log(`Server running at ${8081}.`));
