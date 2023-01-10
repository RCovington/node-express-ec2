import express from 'express'

const app = express();

app.listen(443, () => console.log('API running on 443'));

app.get('/', (req, res) => res.json('My API running ...'));

