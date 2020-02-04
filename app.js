const express = require("express");
const app = express();
const logger = require('morgan');
const axios = require('axios');

app.use(logger('dev'));

// app.get('/', function(req, res) {
//   res.json({test: "Kan du se mig?"})
// })


app.get('/api/number', async (req, res) => {
  try {
    const number = parseInt(Math.random() * 100)
    const requestToNumberApi = await axios.get('http://numbersapi.com/' + number);
    const data = requestToNumberApi.data;
    // const { data } = requestToNumberApi;
    return res.status(200).json(data)
  } catch (error) {
    // console.log("TCL: error", error)
    return res.json(error)
  }
})

app.get('/api/number/specific', async (req, res) => {
  try {
    const numberFromRequest = req.query.number
    
    // Tjek om vi har fået en nummer med i requesten. 
    // Hvis ikke kaster vi en fejl som bliver fanget i catch(){} scoped nedenunder
    if(!numberFromRequest) throw new Error('Nummeret skal komme som get parameter')
    
    const requestToNumberApi = await axios.get('http://numbersapi.com/' + numberFromRequest);
    const data = requestToNumberApi.data;
    // const { data } = requestToNumberApi;
    return res.status(200).json(data)
    
  } catch (error) {
    // console.log("TCL: error", error)
    return res.json(error)
  }
})

const port = 3500;

app.listen(port, () => {
  // console.log('Server er startet på http://localhost:' + port)
  console.log(`Server er startet på http://localhost:${port}`)
})
