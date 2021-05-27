const express = require('express');
const debug = require('debug')('app');
const authRoutes = require('./src/routes/auth.routes')();

require('dotenv').config();

require('./src/ddbb/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

require('./src/passport/passport.config')(app);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', authRoutes);

app.listen(port, debug(`server is running on port ${port}`));
