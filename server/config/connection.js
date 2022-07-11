const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mernshopping"
    .then(connect => console.log('connected to mongodb..'))
    .catch(e => console.log('could not connect to mongodb', e)),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
