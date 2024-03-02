const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    "name": "MyName"
  })
})

app.listen(3000)