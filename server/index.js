const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDB = require('./config/connectDB')
require('dotenv').config()

const exercisesRouter = require('./routes/Exercise')
const userRouter = require('./routes/User')

const app = express()

connectDB()
app.use(cors());
app.use(express.json());

app.get('/',(req , res) =>{
    res.send('Server Running excerMemo')
})

app.use('/exercises' , exercisesRouter)
app.use('/users' , userRouter)

PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server running on PORT ${PORT}`)
})
