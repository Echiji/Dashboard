// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working');
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: "Faire les devoirs", done: false },
    { id: 2, title: "Coder le dashboard", done: true }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
