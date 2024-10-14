import { client_weapons } from "../database";


export type Weapon=
{
    id?: Number;
    name: string;
    type: string;
    weight: number;

};

export class MythicalWeaponsStore {

    /**
     * Select all the weapons
     * @returns 
     */
    async index(): Promise<Weapon[]> {
        try {
            console.log("Came here in MythicalWeaponStore");
            const conn = await client_weapons.connect();
            const sql = 'SELECT * FROM mythical_weapons';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.log(`Can not get weapons ${error}`);
            throw new Error(`Can not get weapons ${error}`);
        }
    }
    /**
     * Show me this weapon with this id
     * @param id 
     * @returns 
     */

    async show(id:number): Promise<Weapon> {
        try {
            const conn = await client_weapons.connect();
            const sql = 'SELECT * FROM mythical_weapons where id=($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            console.log(`Can not get this weapon ${error}`);
            throw new Error(`Can not get this weapon ${error}`);
        }
    }

    /**
     * Update the weapon with this id.
     * @param id 
     * @param weapon 
     * @returns 
     */

    async update(id:number,weapon:Weapon): Promise<Weapon> {
        try {
            console.log("came here in update method of weapon store");
            const conn = await client_weapons.connect();
            const sql = 'UPDATE mythical_weapons SET name = $1, type=$2 , weight=$3 where id=$4 ';
            const result = await conn.query(sql,[weapon.name, weapon.type, weapon.weight, id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            console.log(`Can not update weapons ${error}`);
            throw new Error(`Can not update weapons ${error}`);
        }
    }

    /**
     * Delete the weapon with this id
     * @param id 
     * @returns 
     */
    async delete(id:number): Promise<Weapon> {
        try {
            const conn = await client_weapons.connect();
            const sql = 'DELETE FROM mythical_weapons where id=($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not delete weapons ${error}`);
        }
    }

    /**
     * Create a new weapon
     * @param weapon 
     * @returns 
     */

    async create(weapon:Weapon): Promise<Weapon> {
        try {
            console.log("Came here in create method");
            const conn = await client_weapons.connect();
            const sql = 'INSERT INTO mythical_weapons (name, type, weight) VALUES($1, $2, $3) RETURNING *';
            const result = await conn.query(sql,[weapon.name, weapon.type, weapon.weight]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {

            
            throw new Error(`Can not create weapons ${error}`);
        }
    }
}