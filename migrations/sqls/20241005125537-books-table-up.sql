/* Replace with your SQL commands */
CREATE TABLE books (
    id SERIAL PRIMARY  KEY,
    title VARCHAR(150),
    total_pages integer,
    author VARCHAR(255),
    type VARCHAR(100),
    summary text
);