const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routess')


const app = express()
const port = 2002

app.use(bodyParser.json())
app.use('/', route)


app.listen(port, () => {
    console.log(`Server ${port} bilan ishga tushirildi! ...`)
});
