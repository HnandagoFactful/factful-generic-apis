import express from 'express';
const path = require('path')
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config({ path: path.resolve(__dirname, '../.local.env')});

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/dist')));
console.log('port', path.resolve(__dirname, '../.local.env'));
app.get('/api', (req, res) => {
  res.send('Hello NOD Readers test!');
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});
app.listen(PORT, () => {
return console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});