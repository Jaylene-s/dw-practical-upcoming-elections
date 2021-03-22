// const fetch = require('node-fetch');

// const electionData = async (city, state) => {

//   const ocdState = `ocd-division/country:us/state:${state.toLowerCase()}`;
//   const ocdPlace = city.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '_').toLowerCase().trim();
//   let ocdStatePlace = `${ocdState}/place:${ocdPlace}`;
//   const url = `https://api.turbovote.org/elections/upcoming?district-divisions=${ocdStatePlace}`;

//   const data = await fetch(url, {
//     headers: {
//       "Accept": 'application/json'
//     },
//   })
//   const json = await data.json();
//   //return json;
//   const results = json.map((elections) => ({
//           description: elections.description,
//           date: new Date(elections.date).toDateString(),
//           type: elections.type,
//           url: elections['polling-place-url'],
//       }));
//       console.log(results)
//       return results
// };

// module.exports = {
//   electionData,
// };