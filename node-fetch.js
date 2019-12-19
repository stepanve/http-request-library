

// https://github.com/bitinn/node-fetch
// A light-weight module that brings window.fetch to Node.js
const fetch = require('node-fetch')

console.log('start')
fetch('http://weather.livedoor.com/forecast/webservice/json/v1?city=280010')
  .then(response => response.json())
  .then(json => console.log(json.location))
  .catch(error => console.log(error))
console.log('end')
