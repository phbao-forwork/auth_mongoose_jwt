const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.log("MongoDB connection failed:", error))