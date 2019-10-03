var express=require('express');
var app=express();
//var mysql=require('mysql');
//let path = require('path');
const fs = require('fs');
let bodyParser = require('body-parser');
var csvParser = require('csv-parse');
const db = require('../new/app/config/db.config');
// 
//var db = {};
//var express=require('express');
//var app=express();
//var mysql=require('mysql');

let path = require('path');
//let bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

 
//const db = require('./');

 
const File = db.files;


//var csvParser = require('csv-parse');
// Node packages for file system
//var fs = require('fs');
//var path = require('path');

//db.sequelize.sync({force: true}).then(() => {
   var filePath = path.join(__dirname, 'htnl.csv');
  // Read CSV
  var f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
      function(err){console.log(err);});
  
  // Split on row
  f = f.split("\n");
  
  // Get first row for column headers
  headers = f.shift().split(",");
  
  var json = [];  
  console.log('data pushed-----------------')  
  f.forEach(function(d){
      // Loop through each row
      tmp = {}
      row = d.split(",")
      for(var i = 0; i < headers.length; i++){
        console.log('header '+headers[i]);
        console.log('header '+row[i]);
          tmp[headers[i]] = row[i];

      }
      // Add object to list
      json.push(tmp);
  
  });
  var outPath = path.join(__dirname, 'htnl.csv');
  fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
  function(err){console.log(err);});
  /*File.create({
    type: 'tags',
    name: json,
    data: json
  })
//});
  
 /* var outPath = path.join(__dirname, 'htnl.csv');
  // Convert object to string, write json to file
  fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
      function(err){console.log(err);});*/
 
   app.listen(3000,function(){
    console.log("We have started our server on port 3000");
    });