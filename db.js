/** Database setup for BizTime. */
const { Client } = require('pg');

const client = new Client({
  user: 'your_username',
  host: 'your_host',
  database: 'biztime', 
  password: 'your_password',
  port: 5432, 
});

client.connect();

module.exports = client;

