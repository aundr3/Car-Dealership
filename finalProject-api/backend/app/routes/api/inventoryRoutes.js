const express = require('express')
const router = express.Router()

// destructuring = gets everything we need(?)
const { inventoryDao: dao } = require('../../daos/dao')

router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req,res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

module.exports = router