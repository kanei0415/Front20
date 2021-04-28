const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server Response Success');
})

app.get('/hello', (req, res) => {
  res.send({hello : "Hello React!"});
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})