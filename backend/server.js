const express = require("express")
const dotenv = require("dotenv")
const port = process.env.PORT || 8000


const app = express()


//home page does not need any info

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
