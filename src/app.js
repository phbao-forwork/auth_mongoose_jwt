const express = require('express');
const userRouter = require('./routers/user');
const port = process.env.PORT;

require('./database/database');

const app = express();

app.use(express.json())
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});