import React from 'react';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className="text-center py-5">
            <h1 className='text-2xl mb-4 lg:text-4xl font-bold'>Books List</h1>
            <Books />
        </div>
    );
};

export default Home;