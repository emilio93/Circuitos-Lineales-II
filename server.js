const path = require('path');
const express = require('express');

var app = express();

var serverFolder = __dirname;
app.use(express.static(serverFolder));

app.listen(3000, function() {
  console.log('listening');
});
