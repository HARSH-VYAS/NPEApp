import { client_book } from "../database";
import { client_weapons } from "../database";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Client, Pool } from "pg";

dotenv.config();
const {
    PEPPER,
    SALT_ROUNDS
} = process.env;


export type User = {
    id?: number,
    username: string,
    password_digest: string
}


export class UserStore {


    async createWeaponsUser(user:User) : Promise<User>
    {
        return await this.createUser(user, client_weapons);
    }

    async createBookUser(user:User) : Promise<User>
    {
        return await this.createUser(user, client_book);
    }

    async authenticateWeaponUser(user:string, password:string) : Promise<User | null>
    {
        return await this.authenticateUser(user,password,client_weapons);
    }

    async authenticateBookUser(user:string, password:string) : Promise<User | null>
    {
        return await this.authenticateUser(user,password,client_book);
    }


    private async createUser(user: User, client:Pool): Promise<User> {
        try {
            const conn = await client.connect();

            const hash = bcrypt.hashSync(
                user.password_digest + PEPPER,
                Number(SALT_ROUNDS)
            );
            const sql = 'INSERT INTO users (name, password) VALUES($1, $2) RETURNING *';
            const result = await conn.query(sql, [user.username, hash]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not create User ${error}`);
        }
    }

   private  async authenticateUser(userName: string, password: string, client:Pool): Promise<User | null> {
        try {
            const conn = await client.connect();

            const sql = 'SELECT * from Users where username=($1)';
            const result = await conn.query(sql, [userName]);
            if (result.rowCount === 0)
                return null

            const user: User = result.rows[0];
            if (bcrypt.compareSync(password + PEPPER, user.password_digest)) {
                conn.release();
                return user;
            }

            return null;

        }
        catch (error) {
            throw new Error(`Authentication error  ${error}`);
        }
    }

}