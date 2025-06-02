const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
    console.log('Database connected successfully');
}).catch((err) => {
    console.error('Database connection error:', err);
});
module.exports = mongoose;