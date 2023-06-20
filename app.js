const express = require('express');
const app = express();
const userRouter = require('./routers');

app.use(express.json());

app.use('/produtos', userRouter);

app.listen(8000, () => {
  console.log('Servidor ouvindo na porta 8000');
});
