console.log('hello');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const process = require('process')

// setup a basic expressjs server
const app = express();

// log the device that hit the server
app.use(morgan('combined'));

// easily parse json request
app.use(bodyParser.json());

// allow host or any client to access it
app.use(cors());

// make endpoint request
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!',
    })
})

// if there is no configured port, it will use 8081
app.listen(process.env.PORT || 8081);