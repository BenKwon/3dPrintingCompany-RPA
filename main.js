
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(('./')));

app.get('/',function(request, response){
    fs.readFile(`./index2.html`,'utf8',function(err, body){
        if(err) throw err;
        console.log(body);
        console.log(body);
        response.send(body);
    });

});

app.listen(3001,function(){
    console.log("info : server on");
});