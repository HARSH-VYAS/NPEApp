import { client_book } from "../database";


export type Book=
{
    id?: Number;
    title: String;
    total_pages: Number;
    author: String;
    book_type : String;
    summary: String;

};

export class BookStore {

    /**
     * Show all the books from the book store
     * @returns 
     */
    async index(): Promise<Book[]> {
        try {
            const conn = await client_book.connect();
            const sql = 'SELECT * FROM books';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Can not get books ${error}`);
        }
    }

    /**
     * Show a book whose id is this.id
     * @param id 
     * @returns 
     */
    async show(id:number): Promise<Book> {
        try {
            const conn = await client_book.connect();
            const sql = 'SELECT * FROM books where id=($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not get this books ${error}`);
        }
    }

    /**
     * Update book with thiss weapon 
     * @param id 
     * @param weapon 
     * @returns 
     */
    async update(id:number,book:Book): Promise<Book> {
        try {
            const conn = await client_book.connect();
            const sql = 'UPDATE books SET title = $1, total_pages=$2 , author=$3, book_type=$4, summary=$5 where id=$6 ';
            const result = await conn.query(sql,[book.title,book.total_pages,book.author, book.book_type, book.id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not update books ${error}`);
        }
    }

    /**
     * Delete this book with this id
     * @param id 
     * @returns 
     */

    async delete(id:number): Promise<Book> {
        try {
            const conn = await client_book.connect();
            const sql = 'DELETE FROM books where id=($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not delete books ${error}`);
        }
    }

    /**
     * Create a new book id
     * @param book 
     * @returns 
     */

    async create(book:Book): Promise<Book> {
        try {
            const conn = await client_book.connect();
            const sql = 'INSERT INTO books (name, type, weight) VALUES($1, $2, $3, $4, $5) RETURNING *';
            const result = await conn.query(sql,[book.title, book.total_pages, book.author, book.book_type, book.summary]);
            conn.release();
            return result.rows[0];
        }
        catch (error) {
            throw new Error(`Can not create books ${error}`);
        }
    }
}