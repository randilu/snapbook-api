if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT);

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to Database');
  } catch (error) {
    console.error('Database connection failed\n', error);
  }
})();
