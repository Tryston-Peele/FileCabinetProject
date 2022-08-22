const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/files', require('./routes/folderRoutes'));

//is this messing up because im using app.use without an api??


//home page does not need any info
app.use(errorHandler)
//files will need
//get
//app.get('/files', (req, res) =>   {
//    res.status(200).json({ message: 'get goals})
//})

//put
//test
//post

//delete

app.listen(port, ()=> console.log(`server on port ${port}`))
