// // login.js

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const router = express.Router();

// router.use(express.json());
// router.use(cors());

// // MongoDB connection
// const uri = "mongodb+srv://manthankj:9892368279@eproctor.t4tlblp.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("Connected to MongoDB");
// })
// .catch((error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

// // Define user schema and model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });
// const User = mongoose.model('User', userSchema);

// // Login route
// router.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     // Check if user exists in the database
//     const existingUser = await User.findOne({ email, password });
//     if (existingUser) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
