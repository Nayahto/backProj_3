const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/routes/Route');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () =>
    console.log(`servidor rodando em http://localhost:${port}`),
);
