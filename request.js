// https://github.com/request/request
// Request is designed to be the simplest way possible to make http calls.
// It supports HTTPS and follows redirects by default.
const request = require('request')

const qs = { city: 280010 }
// Pythonのrequestに影響
console.log('start')
request('http://weather.livedoor.com/forecast/webservice/json/v1', { json: true, qs }, (error, response, body) => {
  if (error) return console.log(error)
  console.log(body.location)
})
console.log('end')
