import express, { Request, Response } from 'express';
import { Weapon, MythicalWeaponsStore } from '../models/MythicalWeaponsStore';


const store = new MythicalWeaponsStore();

const index_weapon = async (_req: Request, resp: Response) => {
    try {
        console.log("Came here in index_weapon");
        const data = await store.index();
        resp.json(data);
    }
    catch (error) {
        resp.status(400);
        resp.json(error);

    }

};

const show_weapn = async (req: Request, resp: Response) => {
    try {
        const data = await store.show(Number(req.params.id));
        resp.json(data);
    }

    catch (error) {
        resp.status(400);
        resp.json(error);

    }
   
};

const create_weapon = async (req: Request, resp: Response) => {
    try {
        console.log('Came here in create_weapon in handler');
        const weapon:Weapon = 
        {
            name : req.body.name,
            type:req.body.type,
            weight:req.body.weight
        };
        const data = await store.create(weapon);
        
        resp.json(data);
    }

    catch (error) 
    {
        console.log(`Error happened here  in create_weapon handler ${error}`);
        resp.status(400);
        resp.json(error);
    }
   
};

const update_weapon = async (req: Request, resp: Response) => {
    try {
        console.log(req.body);
        console.log('Came here in update method');
        const weapon:Weapon = 
        {
            name : req.body.name,
            type:req.body.type,
            weight:req.body.weight
        };

        const data = await store.update(Number(req.params.id), weapon);
        resp.json(data);
    }

    catch (error) {
        resp.status(400);
        resp.json(error);
    }
    
};


const delete_weapon = async (req: Request, resp: Response) => {
    try 
    {
        const data = await store.delete(Number(req.params.id));
        resp.json(data);
    }

    catch (error) {
        resp.status(400);
        resp.json(error);
    }
};



export const mythical_weapons_routes = (app: express.Application) => {
    app.get('/weapons', index_weapon);
    app.get('/weapons/:id', show_weapn);
    app.post('/weapons', create_weapon);
    app.put('/weapons/:id', update_weapon);
    app.delete('/weapons/:id', delete_weapon);
}



export default mythical_weapons_routes;