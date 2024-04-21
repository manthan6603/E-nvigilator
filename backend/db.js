const mongoose = require('mongoose');

// const uri = "mongodb+srv://manthankj:9892368279@eproctor.t4tlblp.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://manthan:man12345678@eproctor.mn6wcks.mongodb.net/?retryWrites=true&w=majority&appName=eproctor"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

module.exports = mongoose.connection;
