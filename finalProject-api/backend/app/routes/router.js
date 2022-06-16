const express = require('express')
const router = express.Router()

router.use(express.static('public'))



const PORT = process.env.PORT || 5000

// api build
router.get('/', (req, res) => {
    res.json({
        'All Inventory': `http://localhost:${PORT}/api/inventory`,
        'Contact': `http://localhost:${PORT}/api/contact`,
    })
})


// api/inventory
router.use('/inventory', require('./api/inventoryRoutes'))

// api/contact
router.use('/contact', require('./api/contactRoutes'))


module.exports = router 