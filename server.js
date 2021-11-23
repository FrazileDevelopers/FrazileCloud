const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const express = require('express');
const hbs = require('hbs');
const app = express();

// static Variables
const port = 8000;
const staticPath = path.join(__dirname, '/public');

//To set view-engine
app.set("view engine", "hbs");
// hbs.registerPartials()

// Built-In Middleware
app.use(express.static(staticPath));

app.get('/', (req, res) =>
    fetchData(res));

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "myusername",
//     password: "mypassword",
//     database: "mydb"
//   });
  

function fetchData(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('design/home.html');
    fs.readFile(staticPath+'/home.html', null, function(error, data) {
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
