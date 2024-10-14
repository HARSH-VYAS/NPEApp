import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
const{
    POSTGRES_HOST,
    POSTGRES_DEV_DB_1,
    POSTGRES_DEV_DB_2,
    POSTGRES_USER,
    POSTGRES_PASWD
} = process.env;


export const client_weapons = new Pool({
   host:POSTGRES_HOST,
   database:POSTGRES_DEV_DB_1,
   user:POSTGRES_USER,
   password:POSTGRES_PASWD
});

export const client_book = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DEV_DB_2,
    user:POSTGRES_USER,
    password:POSTGRES_PASWD
 });
