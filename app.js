const express = require("express");
const port = 3000;

var app = express();


app.get('/',(req,res)=>{
    res.json({
        status:true,
        msg:"First Node.js build is ready and working fine."
    })
})

app.listen(port,()=>{
    console.log(`App is listning on port ${port}`)
})