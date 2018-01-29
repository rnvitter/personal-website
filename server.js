var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var cors = require('cors')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(bodyParser.json())
   .use(cors())

app.use(serveStatic(__dirname + "/dist"))

var port = process.env.PORT || 8081

 if (process.env.NODE_ENV === 'production') {
   var API_KEY = process.env.api_key
   var PHOTOSET_ID = process.env.photoset_id
   var USER_ID = process.env.user_id
 } else {
   var { API_KEY, PHOTOSET_ID, USER_ID } = require('./secrets')
 }

app.get('/api', (req, res) => {
  res.json({message: 'Welcome to the Server'})
})

app.get('/photos', (req, res) => {
  request(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${PHOTOSET_ID}&user_id=${USER_ID}&extras=tags&format=json&nojsoncallback=true`,
  (error, response, body) => {
    res.json(body)
  })
})

app.listen(port, () => {
  console.log('API listening on port ' + port)
})
