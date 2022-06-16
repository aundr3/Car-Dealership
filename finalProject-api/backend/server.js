const express = require('express')


// IMPORT SECURITY 
const helmet = require('helmet')
const cors = require('cors')

const server =express().use(helmet()).use(cors()).use(express.json()).use(express.urlencoded({extended: true}));


const router = require('./app/routes/router')
server.use('/api', router)


const PORT = process.env.PORT || 5000
server.listen(PORT, ()=> {
    console.log(`What did they find in the ${PORT} year old pot? Ancient Greece`)
})