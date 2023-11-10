const express = require('express');
const path = require('path')
const app = express();
// console.dir(app)

// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST!')
//     res.send('<h1>This is my webpage</h1>')
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})