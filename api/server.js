const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/folderRoutes"));

//is this messing up because im using app.use without an api??

//home page does not need any info
app.use(errorHandler);
//files will need
//get
//app.get('/files', (req, res) =>   {
//    res.status(200).json({ message: 'get goals})
//})

//put
//test
//post

//delete

app.listen(port, () => console.log(`server on port ${port}`));
