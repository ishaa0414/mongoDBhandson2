const express=require("express");
const bodyParser=require("body-parser");
const route=require("./routes/employee");
const app=express();
app.use(bodyParser.json());
app.use(route);


app.get('/',(req,res)=>{
    return res.send({message:"This is a Human resource database"});
})

app.listen(7878,()=>{
console.log("server is running")
})