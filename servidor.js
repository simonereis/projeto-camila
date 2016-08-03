var http = require("http");
var fs = require("fs");
http.createServer (function (request, response){
    
    fs.readFile("PongEstrutura.html",function(err,data){
        if(err){
            
            //response.writeHead(200,{'Content-type':'text/plain}');
            //response.end('AEEEEEEEEEEE:D');
            
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
        }
    
    response.writeHead(200);
    response.end(data);
    
    });

}).listen(8080);


console.log('aeee');
