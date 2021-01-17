const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://bulentgunturk:1234512345Bg@cluster0.kshxj.mongodb.net/Cluster0?retryWrites=true&w=majority', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`${err.message}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(5000);