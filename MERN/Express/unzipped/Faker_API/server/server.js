//import express
const express = require('express')
app = express()


require('./routes/routes')(app)

app.listen(8000, () => console.log('Listening on port 8000'))