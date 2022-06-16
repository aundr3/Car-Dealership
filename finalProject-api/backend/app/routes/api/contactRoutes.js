const express = require('express')
const router = express.Router()



const { contactDao: dao } = require('../../daos/dao')
// const router = require('./contactRoutes')

// api/contact
router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/form', (req, res) => {
    res.sendFile(__dirname + 'public/contact.html')
})

router.post('/formPost', (req, res) => {
    console.log(req.body)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})


module.exports = router