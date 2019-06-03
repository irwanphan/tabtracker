/*eslint no-undef: "error"*/
/*eslint-env node*/

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// 2/ read thru folder, every file other than index.js
fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db