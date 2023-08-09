const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes'); // Change the path if necessary

app.use(bodyParser.json());

app.use('/api', routes); // Prefix all routes with '/api'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
