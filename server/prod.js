var webpack = require('webpack')
var config = require('../webpack.config')
var app = new (require('express'))()
var port = 3000
var express = require('express')
var path = require('path')
var compiler = webpack(config)

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get("/", function(req, res) {
   res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("===> Listening prod on port %s.", port)
    }
})
