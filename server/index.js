require('dotenv').config();
const express = require('express'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => console.log('Server running on ${SERVER_PORT}'));