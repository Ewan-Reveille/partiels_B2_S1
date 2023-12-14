const express = require('express');
const cors = require('cors');
const app = express();
const { queryDB } = require('./db');

app.use(express.json());



var corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


app.get('/users', async (req, res) => {
  try {
    const result = await queryDB('SELECT * FROM user_infos');
    console.log('Request Body:', req.body); 
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.post('/datas', async (req, res) => {
    try {
      const { lastName, firstName, email, phone, educationLevel } = req.body;
  
      const insertQuery = `
        INSERT INTO user_infos (nom, prenom, email, numero_telephone, niveau_etudes)
        VALUES ($1, $2, $3, $4, $5)
      `;
  
      const result = await queryDB(insertQuery, [lastName, firstName, email, phone, educationLevel]);
      res.status(201).json({ message: 'User data inserted successfully', data: result });
    } catch (err) {
      console.error('Error inserting user data:', err);
      res.status(500).json({ error: 'Error inserting user data' });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
