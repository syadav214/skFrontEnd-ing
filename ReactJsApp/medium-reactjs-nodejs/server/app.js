/** require dependencies */
const express = require('express');
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium';

/** connect to MongoDB datastore */
try {
  mongoose.connect(
    url,
    { useNewUrlParser: true } //used for mongo >= 4.0
  );
} catch (error) {}

let port = process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))

// to use with a prefix
// app.use('/api', router);
app.use(router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
