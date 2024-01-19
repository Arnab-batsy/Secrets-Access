//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

const app= express();
const port= 3000;
var isCorrect= false;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true })); //BodyParser has now been incorporated to express

function check(req,res,next){
    if(req.body["password"]==="ILoveProgramming"){
        isCorrect=true;
    }
    else{
        isCorrect=false;
    }
    next();
}

app.use(check);

app.post("/check",(req,res)=>{
    if(isCorrect==true){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
        res.redirect("/");
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
});