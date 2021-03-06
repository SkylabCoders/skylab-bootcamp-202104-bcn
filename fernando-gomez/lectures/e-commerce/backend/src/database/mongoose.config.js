const { connect } = require('mongoose');
const debug = require('debug')('app:mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error),
);
