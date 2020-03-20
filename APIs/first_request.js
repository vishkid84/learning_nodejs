const request = require ('request');
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
    if(!error && response.statusCode == 200){
        const parsedData = JSON.parse(body);
        console.log(parsedData.name + ' lives in ' + parsedData.address.city);
    }
     else{
        console.log("something went wrong");
        console.log(error);
    }
})

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     if(error){
//         console.log("something went wrong");
//         console.log(error);
//     }else{
//         if(response.statusCode == 200){
//             //THINGS WORKED
//             console.log(body);
//         }
//     }
// })


// var request = require ("request");
// request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
//     // eval(require("locus"))
//     if(!error && response.statusCode == 200){
//         // body returned though looks like an object, it is actually a string. So we need to parse it
//         var parsedData = JSON.parse(body);
//         // THINGS WORKED
//         console.log(parsedData["username"]);
//     }
//     else{
//         console.log("something went wrong");
//         console.log(error);
//     }
// })