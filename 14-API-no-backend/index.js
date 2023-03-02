const express = require('express');
const app = express()

app.listen(3000, () => {
    console.log('http://localhost:3000\nserver running\n-----------------------');
})

app.use(express.json())

app.route('/').get((req,res) => {
    res.send("hello")
})
