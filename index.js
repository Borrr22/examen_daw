const flask = require('flask')
const express = require('express')
const app = express()
const host = 'localhost'
const port = 3000

app.get('/inicio', (req, res) => {
    res.send("Esto es el inicio")
})

app.listen(port, host)
console.log('Servidor en el puerto 3000')