const fs = require('fs');
const functions = require("firebase-functions");
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get('/awesome', (req,res)=>{
    const jsonString = fs.readFileSync(path.join(__dirname, '../src/data.json'), 'utf-8');
    const jsonObj = JSON.parse(jsonString);
    res.json(jsonObj)
})


app.put('/', (req,res)=>{
    try{
        const jsonString = fs.readFileSync(path.join(__dirname, '../src/data.json'), 'utf-8');
        const jsonObj = JSON.parse(jsonString);
        if(req.body.name){
         jsonObj.name = req.body.name;
        }
        if(req.body.size){
         jsonObj.size = req.body.size;
        }
        if(req.body.position){
         jsonObj.position = req.body.position;
        }
        if(req.body.color){
            jsonObj.color = req.body.color;
        }
        const newJsonString = JSON.stringify(jsonObj);
        fs.writeFileSync(path.join(__dirname, '../src/data.json'), newJsonString);
        res.json(JSON.parse(newJsonString))
    }catch(err){
        res.json(err)
        console.log(err)
    }
})

exports.app = functions.https.onRequest(app)