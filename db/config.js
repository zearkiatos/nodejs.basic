require('dotenv').config();
module.exports.config = {
    "DB_HOST":process.env.DB_HOST,
    "DB_PORT":process.env.DB_PORT,
    "DB_NAME":process.env.DB_NAME
}

