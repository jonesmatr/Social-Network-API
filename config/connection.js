const { connect, connection } = require('mongoose');

const connectionString = 
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('connected', () => {
  console.log('MongoDB connected successfully!');
});

connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connection;
