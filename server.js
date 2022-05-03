const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: './.env'})

const app = require('./app')

const DB = process.env.DB

mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:27017/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`)
.then(() => console.log('Successful Connection') )
.catch(err => { console.log('error while connecting DB', err) });

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Running On Port ${port}`);
    console.log('Env: ', process.env.NODE_ENV)
})