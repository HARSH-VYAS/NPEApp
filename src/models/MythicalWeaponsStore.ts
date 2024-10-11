import client
 from "../database";

 export type Weapon{

    id: Number;
    name : String;
    type: String;
    weight : Number;

 }

 export class MythicalWeaponsStore
 {
        async index(): Promise<Weapon[]>{
            try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM mythical_weapons';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(error)
        {
            throw new Error(`Can not get weapons ${error}`);
        }
        }
 }