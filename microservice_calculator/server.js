const express = require('express');
const app = express();
const calculatorRouter = require('./router/router');

app.use(express.json());
app.use('/api', calculatorRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Calculator Microservice running on port ${PORT}`);
});