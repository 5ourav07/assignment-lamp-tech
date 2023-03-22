import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const { id, title, author, image } = book;

    return (
        <div className="card card-side bg-slate-300 shadow-xl">
            <figure><img className='ml-5 rounded-lg' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className='font-bold'>{title}</h2>
                <p className='pt-5'>{author}</p>
                <Link to={`/book/${id}`}>
                    <button className="mt-3 text-white font-bold border border-neutral bg-black btn btn-ghost">See Books</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;