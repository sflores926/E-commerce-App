import express from 'express';
import data from './data.js';

const app = express();
//test
app.get('/api/products', (req,res) => {
    res.send(data.products)
});

const port = process.env.PORT || 5000;
// server starts and listens to parameter
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});


