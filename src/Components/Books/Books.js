import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
                {
                    books.map(book => <BookCard
                        key={book.id}
                        book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;