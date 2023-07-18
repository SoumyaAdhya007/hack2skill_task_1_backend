// Connect to the mongodb atlas

const mongoose = require('mongoose');

require("dotenv").config()

const connection = mongoose.connect(process.env.mongourl)

//exporting the connection
module.exports = {
    connection
}