const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const ErrorMid = require('./Mid/ErrorHand')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(ErrorMid)

const start = async ()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, ()=> console.log('server start'))
    } catch (error) {
        console.log(error)
    }
}

start()