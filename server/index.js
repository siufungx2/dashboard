const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

app.use(cors());

dotenv.config();
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB connected');
});

// Middleware
app.use(express.json());
//Routes middleware
app.use('/api/user', authRoute);
app.use('/api/users', userRoute);

// Handle production
if(process.env.NODE_ENV === 'production'){
    // Static folder 
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log("Server is running at port "+port);
});