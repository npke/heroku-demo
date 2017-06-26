const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

server.get('/', (req, res) => {
  res.json({ message: 'Written in Node.js with love'});
});

server.listen(port, () => {
  console.log(`- INFO: Server running at port ${port}`);
});
