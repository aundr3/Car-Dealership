const con = require('../../config/dbconfig')

const contactDao = {
    table: 'contact',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body) //creates an array
            const values = Object.values(req.body) // creates an array
            con.execute(
                `INSERT INTO contact SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record.')
                    }
                }
            )
        }
    }
}

module.exports = contactDao