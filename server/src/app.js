// console.log('hello');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// 2/
// const process = require('process')
const config = require('./config/config')

// 2/ export a sequelize object that returned from index.js from the models folder
const {sequelize} = require('./models')

// setup a basic expressjs server
const app = express();

// log the device that hit the server
app.use(morgan('combined'));

// easily parse json request
app.use(bodyParser.json());

// allow host or any client to access it
app.use(cors());

// make endpoint request
// app.get('/status', (req, res) => {
//     res.send({
//         message: 'hello world!',
//     })
// })
// ob 2/ moved to routes
// app.post('/register', (req, res) => {
//     res.send({
//         message: `hello ${req.body.email}! you are now registered!`,
//     })
// })
require('./routes')(app)

// 2/ connect to any db that configured for and reate a table if they didn't existed
sequelize.sync()
    .then(() => {
        // change to the config port, so need to import config
        // app.listen(process.env.PORT || 8081);
        app.listen(config.port);
        // message for started server
        console.log(`Server started on port ${config.port}`)
    })

// ob on 2/
// if there is no configured port, it will use 8081
// app.listen(process.env.PORT || 8081);