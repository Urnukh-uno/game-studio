const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sql = require('mysql');
const connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'game_db'
});

// Нууц үгийг шифрлэх
bcrypt.hash(userPassword, 10, (err, hashedPassword) => {
  if (err) throw err;
  
  // Хэрэглэгчийг нэмэх
  connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], function(err, results) {
    if (err) throw err;
    console.log('Шинэ хэрэглэгч амжилттай нэмэгдлээ');
  });
});

// Хэрэглэгчийн мэдээллийг шалгах
connection.query('SELECT * FROM users WHERE email = ?', [email], function(err, results) {
  if (err) throw err;

  // Нууц үгийг зөвшөөрөх
  bcrypt.compare(userPassword, results[0].password, (err, isMatch) => {
    if (err) throw err;
    if (isMatch) {
      // JWT токен үүсгэх
      const token = jwt.sign({ userId: results[0].id }, 'secretKey', { expiresIn: '1h' });
      console.log('JWT токен:', token);
    } else {
      console.log('Нууц үг буруу');
    }
  });
});