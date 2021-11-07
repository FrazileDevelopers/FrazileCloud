const http = require('http');
const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('./assets'));

app.get('/', function(req, res) {
    fetchData(res);
});

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "myusername",
//     password: "mypassword",
//     database: "mydb"
//   });
  

function fetchData(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('design/home.html');
    fs.readFile('./design/home.html', null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write('File Not Found!');
        } else {
            response.write(data);
        }
        response.end();
    });
    
}
// http.createServer(onRequest).listen(8000);

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
})
