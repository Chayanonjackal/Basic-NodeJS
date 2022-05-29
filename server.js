const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
})
conn.connect(function (err){
    if(err) throw err 
    console.log('connected to server');

})


app.get('/',(req,res) =>{
    return res.send("Hello Frist Page")
})

app.get('/fristpage',(req,res)=>{
    return res.send("Hello my test page")
})

app.get('/get-jason', (req,res) => {
    return res.json({
        id : 1
    })
})

app.get('/get-status', (req,res) => {
    return res.status(200).json({
        msg : "nice 200"
    })
})

app.post('/post-name',(req,res) =>{
    console.log(req);
   return res.json(req.body)
})
//Routes

const user = require('./Routes/userRoute');
app.use('/user',user);



app.listen(5000 , () => console.log("server start at 8000")) ;