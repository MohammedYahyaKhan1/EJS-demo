const express=require("express");
const app=express();
let port=3000;
app.set("view engine","ejs");
app.get("/ig/:username",(req,res)=>{
    const InstaData=require("./data.json");
    let {username}=req.params; 
    const data=InstaData[username];  
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});
app.listen(port,()=>{
    console.log(`listening to port:${port}`);
});