const daoCommon = require('./common/daoCommon')

const inventoryDao = {
    ...daoCommon,
    ...require('./api/inventoryDao')

    // const filmDao = Object.assign(daoCommon, require('./api/filmDao'))

    // const filmDao = {...daoCommon, ...require('./api/filmDao')}
}

const contactDao = {
    ...daoCommon,
    ...require('./api/contactDao')
}

// const salesDao = {
//     ...daoCommon,
//     ...require('./api/salesDao')
// }

module.exports = {
    inventoryDao,
    contactDao
}