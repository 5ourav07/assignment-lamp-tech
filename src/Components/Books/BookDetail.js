import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    useEffect(() => {
        fetch('https://mocki.io/v1/7af5558b-977e-4342-80c9-8feef78a9d31')
            .then(res => res.json())
            .then(data => {
                const project = data.find(p => p.id === id);
                console.log(project)
                return setBookData(project);
            })
    }, [id])

    // const { image, title, author, publication_date, summary } = bookData;

    return (
        <div className="card w-2/5 mx-auto card-side bg-base-100 shadow-xl">
            <figure><img src={bookData.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookData.title}</h2>
                <p>{bookData.author}</p>
                <p>{bookData.publication_date}</p>
                <p>{bookData.summary}</p>
            </div>
        </div>
    );
};

export default BookDetail;