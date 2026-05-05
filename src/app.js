const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/tacos', require('./routes/taco.routes'));

module.exports = app;