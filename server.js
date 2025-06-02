const express = require('express');
const app = express();
require('dotenv').config();    
const bodyParser = require('body-parser');
app.use(express.json());
const db = require('./config/database'); // Import the database configuration


app.listen(Process.env.PORT,() =>{
    console.log(`server is running on port ${process.env.PORT || 40000}`)
}
)
//import routes
const productRoutes = require('./routes/route');
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

db.connect();