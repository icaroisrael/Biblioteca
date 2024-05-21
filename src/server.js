const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routers')

const app = express();
const PORT = 3003;
app.use(cors());
app.use(express.json())
app.use(router);
app.use(bodyParser.urlencoded({extended: false}));








app.listen(PORT, () => {
    console.log(`Server Runnin on: http://localhost:${PORT}`)
})