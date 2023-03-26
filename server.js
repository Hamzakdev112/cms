const fs = require('fs');
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors({
    origin:"http://localhost:3000"
}))


app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())


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


app.listen(4000, ()=>{
    console.log('server started')
})

