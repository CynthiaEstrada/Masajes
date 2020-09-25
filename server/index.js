const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const cors = require('cors');
var Reserva=require('./Scripts/Reserva.js');
var admin = require("firebase-admin");
var serviceAccount = require("./paginamasajes-firebase-adminsdk-6bt6a-c43c8d8e1d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://paginamasajes.firebaseio.com" });
var dataBase = admin.database();

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/guardarhora',function(req,res){
  let data=req.body;
  Reserva.GuardarHora(dataBase,res,data);
})
app.post('/obtenerhoras',function(req,res){
  let data=req.body;
  Reserva.ObtenerHoras(dataBase,res);
})








app.listen(process.env.PORT || 4000 ,function(){     console.log("up and running on port "+process.env.PORT); });
