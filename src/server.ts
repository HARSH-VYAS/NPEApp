import express from 'express';
import cors from 'cors';
import book_routes from './api/routes/books';
import myth_routes from './api/routes/myth';
import mythical_weapons_routes from './handlers/myth_handler';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.get('/', (req,resp)=>{
    resp.send("Hello World from Vyas Harsh PankeshKumar, Staff Software Engineer at Google");
})

const corsOptions={
    origin:'https://someotherdomain.com',
    optionsSuccessStatus:200
}
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
//app.use('/store',book_routes);
//app.use('/myth',myth_routes);

mythical_weapons_routes(app);




app.listen(port, ()=>{
    console.log("Our Server started");
})


export default app;