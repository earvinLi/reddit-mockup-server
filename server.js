// External dependencies
require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running at ${PORT}.`));
