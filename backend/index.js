const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
    // set up port
const PORT = 8080
app.use(bodyParser.json({ limit: '10000000mb' }));
app.use(express.urlencoded({ limit: '10000000mb', extended: true }));

app.use(cors());
// add routes
app.use('/api', require('./routes'));
// const router = require('./routes/router.js');
// app.use('/api', router);
// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));