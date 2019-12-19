// https://github.com/sindresorhus/got
// Human-friendly and powerful HTTP request library for Node.js
const got = require('got')

console.log('start')
const searchParams = new URLSearchParams({ city: 280010 })
got('http://weather.livedoor.com/forecast/webservice/json/v1', { searchParams, responseType: 'json' }).then(response => {
  console.log(response.body.location)
}).catch(error => {
  console.log(error)
})

console.log('end')
