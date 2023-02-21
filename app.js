const express = require('express');
const router = require('./routes/index');
const app = exptess();

app.use(express.json());
app.use('/api', router);

module.exports = app; 