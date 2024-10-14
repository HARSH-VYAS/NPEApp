import express from 'express';
import app from '../../server';

const book_routes = express.Router();

book_routes.get('/books', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

book_routes.get('/books/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

book_routes.post('/books', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

book_routes.put('/books/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})


book_routes.delete('/books/:id', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})


export default book_routes;