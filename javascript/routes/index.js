var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

router.post('/search', function(req,res,next){
  //add value to url
  let state =req.body.state;
  let place =req.body.city;
  const ocdState = `ocd-division/country:us/state:${state.toLowerCase()}`;
  const ocdPlace = place.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '_').toLowerCase().trim();
  let ocdStatePlace = `${ocdState}/place:${ocdPlace}`;
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=${ocdStatePlace}`;

  fetch(url, {
    headers: {
      "Accept": 'application/json'
    },
  })
  .then((response) => response.json())
  .then((electionData) => {
    if(electionData.status = 200 && electionData.length > 0){
      let results = electionData.map((elections) => {
        return {
          description: elections.description,
          date: new Date(elections.date).toDateString(),
          type: elections.type,
          url: elections['polling-place-url'],
        }
      });
      console.log(results) 
      res.render('search', { results })
    }else{
      res.send("No upcoming elections in your area")
    }
  })
  .catch((error)=>res.send(error))
})

module.exports = router;