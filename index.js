const express = require('express');
const path = require('path');
const app =  express();
const BitFenix = require('./lib/bitfenix.js');

const bitFenix = new BitFenix();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Api end point to get last price
app.get('/api/lastprice', (req, res, next) => {
  bitFenix.getPrice((err, data) => {
    if (err) {
      console.log("Error retrieving bitfenix price ", err);
      res.setError(err);
      return;
    }
    res.send(data);
  });
});

// Failed match to endpoint direct request to index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});


