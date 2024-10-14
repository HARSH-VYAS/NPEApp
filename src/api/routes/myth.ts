import express from 'express';

const myth_routes = express.Router();

myth_routes.get('/weapon', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

myth_routes.get('/weapon/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

myth_routes.post('/weapon', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

myth_routes.put('/weapon/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

myth_routes.delete('/weapon/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

export default myth_routes;