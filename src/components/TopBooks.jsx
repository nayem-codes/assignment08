import React from 'react';
import PhotoCard from './PhotoCard';

const TopBooks = async() => {
    const res = await fetch('https://assignment08-sable.vercel.app/data.json')
const photos = await res.json()
const topBooks = photos.slice(0, 8);
    return (
        <div>
            <h1>Top Books List</h1>

            <div className='grid grid-cols-4 gap-4'>
                {topBooks.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default TopBooks;