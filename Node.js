const sql = require('mysql');
const connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'game_db'
});

connection.query('SELECT * FROM users WHERE id = ?', [userId], function(err, results) {
  if (err) throw err;
  console.log(results);
});

const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet()); // Таны вэбсайтын аюулгүй байдлыг хамгаална
app.listen(3000, () => console.log('Server is running'));
