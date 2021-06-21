const express = require('express');
const app = express();
const booksRoute = require('./route/booksRoute');
const clientsRoute = require('./route/clientsRoute');
const purchasesRoute = require('./route/purchasesRoute');
const companysRoute = require('./route/companysRoute');

const endpointsFiles = ['./server/server.js']

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

app.use(express.json());

app.use(booksRoute);
app.use(clientsRoute);
app.use(purchasesRoute);
app.use(companysRoute);
app.listen(3333);
console.log("server rodando!");


