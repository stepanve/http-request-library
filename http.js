// https://www.w3schools.com/nodejs/nodejs_http.asp
// Node.js has a built-in module called HTTP,
// which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require('http')

console.log('start')
http.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=280010', (response) => {
  let data = ''
  let count = 0
  response.setEncoding('utf8')

  response.on('data', (chunk) => {
    console.log(++count)
    data += chunk
  })

  response.on('end', () => {
    console.log(JSON.parse(data).location)
  })
}).on('error', (error) => {
  console.log(error)
})
console.log('end')
