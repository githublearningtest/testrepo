const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("hello world");
})

PORT =3000 || 4000;

app.listen(PORT,()=>{
    console.log(`Server listen on ${PORT}`)
})