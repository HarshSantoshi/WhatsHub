import  Express  from "express";
import DBConnection from "./database/mongoDB.js";
import cors from 'cors'
import bodyParser from "body-parser";
import Route from "./routes/index.js";

const app = Express();
const PORT = 8000;

DBConnection();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Route);
app.listen(PORT , (err)=>{
    if(err){
        console.log("some error occured while setting the server ", err);
        return ;
    }
    console.log("The server is up and running on the port " , PORT);

})