const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { User } = require('./models/user');
const config = require('./config/key');

mongoose
.connect(config.mongoURI, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`${err.message}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register' , function (req, res) {

    const user= new User(req.body)
    user.save((err, document) => {   
        if(err) return res.json ({ success: false, err})
    });
    return res.status(200).json({
        success: true,
    });
  });



  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
  });