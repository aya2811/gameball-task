const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect',()=>{
    console.log('Database is connected sucessfully :)')
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};