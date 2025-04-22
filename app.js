const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public')); // optional if you have CSS/JS

app.get('/', (req, res) => {
  res.render('index', { name: process.env.USER_NAME || 'Faisal' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
