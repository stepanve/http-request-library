// https://github.com/visionmedia/superagent
// Small progressive client-side HTTP request library, and Node.js module with the same API,
// supporting manyhigh-level HTTP client features
const superagent = require('superagent')
console.log('start')
superagent.get('http://weather.livedoor.com/forecast/webservice/json/v1')
  .query({ city: 280010 })
  .end((error, response) => {
    if (error) return console.log(error)
    console.log(response.body.location)
  })
console.log('end')
