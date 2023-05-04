const express = require('express')
const app = express();
const cors = require('cors')
const port =process.env.port || 5000 ;
const data = require("./data/data.json");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send(data)
})
app.get('/home/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = data.find(n => n.id === id);
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})