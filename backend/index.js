const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
const uri = "mongodb+srv://manthan:man12345678@eproctor.mn6wcks.mongodb.net/?retryWrites=true&w=majority&appName=eproctor";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Define user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Define exam schema and model
const examSchema = new mongoose.Schema({
  name: String,
  desc: String,
  level: String,
  passMarks: Number,
  totalQuestion: Number,
  marks: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'exams' });
const Exam = mongoose.model('Exam', examSchema);

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Signup route
app.post('/api/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email, password });
    if (existingUser) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Fetch students route
app.get('/api/students', async (req, res) => {
  try {
    const students = await User.find({}, 'name email');
    res.status(200).json({ students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/exams', async (req, res) => {
  try {
      const exams = await Exam.find(); // Make sure the Exam model is imported and set up correctly
      res.json(exams);
  } catch (error) {
      console.error('Failed to fetch exams:', error);
      res.status(500).json({ message: "Error fetching exams" });
  }
});


// Fetch and Add Exams Routes
app.get('/api/exams', async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.status(200).json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/exams', async (req, res) => {
  try {
    const newExam = new Exam(req.body);
    await newExam.save();
    res.status(201).json({ message: 'Exam created successfully', exam: newExam });
  } catch (error) {
    console.error('Error creating exam:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
