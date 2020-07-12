const express = require('express');
const bodyParser = require( 'body-parser');
const mongoose = require('mongoose'); 
const routes = require('./src/routes')

mongoose.connect('mongodb://localhost/productsdb', { useNewUrlParser: true,useUnifiedTopology :true  })

mongoose.Promise = global.Promise;
const app = express();
const PORT = 4000;


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

routes(app);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
