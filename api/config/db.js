const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ezra:ezra123@firstcluster.3kwzhtl.mongodb.net/?retryWrites=true&w=majority"
    );
    //process.env.MONGO_URI
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    //${conn.connection.host}
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
