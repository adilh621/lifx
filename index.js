// const axios = require('axios');

// const appToken = 'c50c02e356e09edd966fca91e9e4cafbc6392a08d9ce89f6f9aed2337f6b259e' ;



function turnOn(){

var axios = require('axios');


const options = {
  headers: {
      'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
  }
};

const data = {
	period: 10,
	cycles: 1,
	color: "white"
}

var breathe = "https://api.lifx.com/v1/lights/all/effects/breathe"
var power = "https://api.lifx.com/v1/lights/all/toggle"

axios.post(power, data, options)
 .then((res) => {
   console.log("RESPONSE ==== : ", JSON.stringify(res.status));
 })
 .catch((err) => {
   console.log("ERROR: ====", err);
 })

};

turnOn();
 

// var axios = require('axios');


// const options = {
//   headers: {
//       'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
//   }
// };

// const data = {
// 	period: 10,
// 	cycles: 1,
// 	color: "white"
// }

// var breathe = "https://api.lifx.com/v1/lights/all/effects/breathe"
// var power = "https://api.lifx.com/v1/lights/all/toggle"

// axios.post(power, data, options)
//  .then((res) => {
//    console.log("RESPONSE ==== : ", JSON.stringify(res.status));
//  })
//  .catch((err) => {
//    console.log("ERROR: ====", err);
//  })






// var request = require('request');

// var headers = {
//     'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
// };

// var options = {
//     url: 'https://api.lifx.com/v1/lights/all/toggle',
//     method: 'POST',
//     headers: headers

// };
// var options2 = {
//     url: "https://api.lifx.com/v1/lights/all/state/delta" ,
//     method: 'POST',
//     headers: headers,
//     body: 'brightness=0.1'
// };

// function callback(error, response, body) {

// 	console.log(response.statusCode)
//     if (!error && response.statusCode == 207) {
//         console.log(body);
//     }
// }

// request(options, callback);
// request(options2, callback);




