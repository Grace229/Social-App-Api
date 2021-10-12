const http = require('http')
const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
mongoose.connect(process.env.mongo_URL)
.then(()=> console.log('Database connected successfully'))
.catch(err => console.log(`Database error ${err}`))
server.listen(port, () => console.log(`Server listening on ${port}`))