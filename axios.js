// https://github.com/axios/axios
// Promise based HTTP client for the browser and node.js
const axios = require('axios')

console.log('start')
axios.get('http://weather.livedoor.com/forecast/webservice/json/v1', {
  params: {
    city: 280010
  }
})
  .then(response => {
    console.log(response.data.location)
  })
  .catch(error => {
    console.log(error)
  })
console.log('end')
