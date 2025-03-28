require('dotenv').config();
const express = require('express');
const app = express();

const salesRoute = require('./Routes/SalesRoute');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/sales', salesRoute);

const { testConnection } = require('./config/db');
testConnection();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})