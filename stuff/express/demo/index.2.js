const express = require('express')
const fs = require('fs')

const server = express()

server.get('/', (req, res) => { // route handler, middleware, ... controller
    fs.readFile('./index.html', 'utf8', (error, html) => {
        if (error) {
            res.status(500).send(`<!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>API</title>
                </head>

                <body>
                    <h1>Server Error! Go home, take a nap, and come back later!</h1>

                    <p>${error.message}</p>
                </body>

                </html>`)

            return
        }

        //res.status(200).send(html)        
        res.send(html)
    })
})

server.get('/cars', (req, res) => {
    fs.readFile('./cars.json', 'utf8', (error, json) => {
        if (error) {
            // res.status(500)
            // res.setHeader('Content-Type', 'application/json')
            // res.send(json)

            res.status(500).json({ error: error.constructor.name, message: error.message })

            return
        }

        // res.status(200)
        // res.setHeader('Content-Type', 'application/json')
        // res.send(json)

        const cars = JSON.parse(json)

        res.json(cars)
    })
})

server.get('/cars/:carId', (req, res) => {
    fs.readFile('./cars.json', 'utf8', (error, json) => {
        if (error) {
            res.status(500).json({ error: error.constructor.name, message: error.message })

            return
        }

        const cars = JSON.parse(json)

        const car = cars.find(car => car.id === req.params.carId)

        if (car)
            res.json(car)
        else
            res.status(404).json(null)
    })
})

server.listen(8080, () => console.log('server listening on port 8080'))