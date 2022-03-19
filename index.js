const express = require('express');
const route = require('./routes/coursesRoute');

const app = express();

app.use(express.json());

app.use('/courses', route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})