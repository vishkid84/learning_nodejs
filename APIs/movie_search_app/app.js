var express = require("express");
var app = express();
var request = require("request");

app.get("/", function(req, res){
    request("http://www.omdbapi.com/?s=kerala&apikey=f0d1e078", function(error, response, body){
        if(!error && response.statusCode == 200){
            const results = JSON.parse(body);
            res.send(results.Search[1]["Title"]);
            console.log(results);
        }
        else{
        console.log("something went wrong");
        console.log(error);
    }
    })
});

app.listen(3000, function(){
    console.log("Movie search db server has started");
})