require('dotenv').config()

const express = require('express')
//const { default: mongoose } = require('mongoose')
const postRoutes = require('./routes/posts')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
//express app
const app = express()
app.use(express.json())
//middleware
app.use((req, res, next) =>{
    //log out request path and method
    console.log(req.path, req.method)
    next()
})

//route
//HTTP get request, specify route when at route domain, fire function, pass in request and response objects
//dont need this when we have the routes defined, use .use handler instead
// app.get('/', (req, res) =>{
//     res.json({mssg: 'Welcome to my app'})
// })
app.use('/api/posts', postRoutes)
//connect to db, asynchronous that returns a promise, .then fires when promise is complete
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
        console.log('connected to db, listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

module.exports.handler = serverless(app)

//listen for requests

//npm install dotenv
//package that loads env variables into process.env object available globally in Node.js env
