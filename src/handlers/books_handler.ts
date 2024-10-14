import express, { Request, Response} from 'express';
import { Book, BookStore } from '../models/Books';


const store = new BookStore();

const index_books = async (_req:Request, resp:Response)=>{
    try{
        const data = await store.index();
        resp.json(data);
    }
    catch(error)
    {
        resp.status(400);
        resp.json(error);
    }
    
};

const show_books = async (req:Request, resp:Response)=>{
    try
    {
        const data = await store.show(Number(req.params.id));
        resp.json(data);
    }
    catch(error)
    {
        resp.status(400);
        resp.json(error);
    }
    
};

const create_books = async (req:Request, resp:Response)=>{
    try{
        const book :Book = 
        {
            title: req.body.title,
            total_pages: req.body.total_pages,
            author: req.body.author,
            book_type : req.body.book_type,
            summary: req.body.summary
        }
        const data = await store.create(book);
        resp.json(data);
    }
    catch(error)
    {
        resp.status(400);
        resp.json(error);
    }
    
};

const update_books = async (req:Request, resp:Response)=>{

    try{
        const book :Book = 
        {
            title: req.body.title,
            total_pages: req.body.total_pages,
            author: req.body.author,
            book_type : req.body.book_type,
            summary: req.body.summary
        }
        const data = await store.update(Number(req.params.id), book);
        resp.json(data);
    }
    catch(error)
    {
        resp.status(400);
        resp.json(error);
    }
    
};


const delete_books = async (req:Request, resp:Response)=>{
    try{

    }
    catch(error)
    {
        resp.status(400);
        resp.json(error);
    }
    const data = await store.delete(Number(req.params.id));
    resp.json(data);
};



export const books_routes = (app:express.Application) =>
{
    app.get('/books', index_books);
    app.get('/books/:id', show_books);
    app.post('/books', create_books);
    app.put('/books/:id', update_books);
    app.delete('/books/:id', delete_books);
}



export default books_routes;