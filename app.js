const express = require('express')
const app = express()
const port = 3000

app.get('/changeroute', (req, res) => {
  res.send('Hello World123!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})