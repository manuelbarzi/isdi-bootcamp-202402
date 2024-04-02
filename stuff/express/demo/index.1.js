const express = require('express')

const server = express()

server.get('/', (req, res) => { // route handler, middleware, ... controller
    console.log(req)

    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>

<body>
    <h1>Hello! from API</h1>
</body>

</html>`)
})

server.listen(8080, () => console.log('server listening on port 8080'))