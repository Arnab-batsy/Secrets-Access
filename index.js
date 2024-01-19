//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app= express();
const port= 3000;
var isCorrect= false;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

function check(req,res,next){
    if(req.body["password"]==="ILoveProgramming"){
        isCorrect=true;
    }
    next();
}

app.use(check);

app.post("/check",(req,res)=>{
    if(isCorrect==true){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
});