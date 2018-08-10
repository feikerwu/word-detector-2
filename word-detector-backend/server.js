const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    res.json({
        result: 'hello'
    })
})

app.listen(3000)