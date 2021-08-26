const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mycoolendpoint', (req, res) => {
    res.send('<h1>ENDPOINT!</h1>')
})

app.get('/data', (req, res) => {
    var myData = {
        "some":"thing",
        "other":12345
    }

    res.send(myData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})