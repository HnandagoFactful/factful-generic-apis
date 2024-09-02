import express from 'express';
import pages from './router/pages';
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config({ path: path.resolve(__dirname, '../.local.env')});

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('*', pages);

app.listen(PORT, () => {
return console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});