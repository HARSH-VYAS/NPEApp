import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

app.listen(port, ()=>{
    console.log("Our Server started");
})