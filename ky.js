// https://github.com/sindresorhus/ky
// Ky targets modern browsers and Deno.
// For older browsers, you will need to transpile and use a fetch polyfill.
// For Node.js, check out Got. For isomorphic needs (like SSR), check out ky-universal.
const ky = require('ky-universal')

console.log('start')
const searchParams = { city: 280010 }
ky('http://weather.livedoor.com/forecast/webservice/json/v1', { searchParams })
  .then(response => response.json())
  .then(json => console.log(json.location))
  .catch(error => console.log(error))
console.log('end')
