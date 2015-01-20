var Client = require('node-rest-client').Client;

client = new Client();

// direct way
client.get("http://osochenko.pp.ua", function(data, response){
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});

//registering remote methods
client.registerMethod("jsonMethod", "http://osochenko.pp.ua", "GET");

client.methods.jsonMethod(function(data,response){
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});