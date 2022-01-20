
const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 4000
const app = express();


// send to '5000:/static' ------------------> everything inside '/public'
app.use('/static', express.static(path.join(__dirname, '/client/src/public')))
app.use('/css',express.static(__dirname +'/css'));
app.use('/html' ,express.static(__dirname +'/html'));


// send to '5000:/' ----------------------> /index.html
app.get('/', (_, res) => { res.sendFile(__dirname + '/client/src/index.html') })



app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})