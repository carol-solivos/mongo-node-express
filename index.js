var express = require('express');
var operations = require('operations');

var app = express();
var sdf = operations();

sdf.listen(3000, function () {
	console.log('El producto de 4 x 10 es ' + producto(4,10));
});

app.get('/', function(req, res) {   res.send('Hola Mundo!'); });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// console.log('El producto de 4 x 10 es ' + operations.producto(4,10));