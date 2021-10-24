const express = require('express');
const cors = require('cors');
require('dotenv/config');

const albumRouter = require('./route/albumRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/albums', albumRouter);

module.exports = app;
