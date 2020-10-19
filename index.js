getLightInfo = () => {

    var axios = require('axios');
  
  
    const options = {
      headers: {
          'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
      }
    };
    
    var all = 'https://api.lifx.com/v1/lights/all'
    
    axios.get(all, options)
     .then((res) => {
       console.log("RESPONSE ==== : ", JSON.stringify(res.data[0]));
       var label = $("#lightLabel");
       label.text(res.data[0].label);
       var power = $("#powerToggle");
       if(res.data[0].power === "off"){
        
        power.text(`Power: ${res.data[0].power}`);
       }
       else { 
         console.log(res.data[0].power);
        power.text(`Power: ${res.data[0].power}`);
       }
     })
     .catch((err) => {
       console.log("ERROR: ====", err);
     })
    
    };
  
  
  turnOn = () => {
  
  var axios = require('axios');
  
  
  const options = {
    headers: {
        'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
    }
  };
  
  const data = {
  
      color: "white"
  }
  
  var power = "https://api.lifx.com/v1/lights/all/toggle"
  
  axios.post(power, data, options)
   .then((res) => {
     console.log("RESPONSE ==== : ", JSON.stringify(res.status));
   })
   .catch((err) => {
     console.log("ERROR: ====", err);
   })
  
  };
  
  
  breatheEffect = () => {
  
    var axios = require('axios');
    
    
    const options = {
      headers: {
          'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
      }
    };
    
    const data = {
      period: 5,
      cycles: 3,
      color: "blue"
    }
    
    var breathe = "https://api.lifx.com/v1/lights/all/effects/breathe"
    
    
    axios.post(breathe, data, options)
     .then((res) => {
       console.log("RESPONSE ==== : ", JSON.stringify(res));
     })
     .catch((err) => {
       console.log("ERROR: ====", err);
     })
    
    };
  
    pulseEffect = () => {
  
      var axios = require('axios');
      
      
      const options = {
        headers: {
            'Authorization': 'Bearer c55a9ea89c4659c51b25c4ee279f898eb47a6779f2835611ff7d5ac894906b9f'
        }
      };
      
      const data = {
        period: 5,
        cycles: 3,
        color: "blue"
      }
      
      var pulse = "https://api.lifx.com/v1/lights/all/effects/pulse"
      
      
      axios.post(pulse, data, options)
       .then((res) => {
         console.log("RESPONSE ==== : ", JSON.stringify(res));
       })
       .catch((err) => {
         console.log("ERROR: ====", err);
       })
      
      };
  