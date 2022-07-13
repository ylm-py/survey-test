require("dotenv").config();
const cors = require('cors')
const mongoose = require("mongoose");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

let User = require('./Schemas/User');
mongoose.connect(process.env.MONGODB_URL , { useNewUrlParser: true });
const db = mongoose.connection;




app.use(bodyParser.json())
app.use(cors())

app.get('/surveyReports', (req, res) => {
  //get all data from users collection
  User.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  }
  )
})

app.post('/survey', (req, res) => {
    let user = new User(req.body);
    user.save((err, user) => {
        if (err) return console.error(err);
        else{
            res.status(200).send('survey saved')
        }
    }
    );
    
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})