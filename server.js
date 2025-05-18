
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Nobalits Data Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
