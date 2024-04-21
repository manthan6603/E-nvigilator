// // signup.js

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

// // Signup route
// router.post('/api/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const newUser = new User({ name, email, password });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
