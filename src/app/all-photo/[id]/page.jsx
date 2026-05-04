import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const [id] = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()

    const photo = photos.find(p => p.id ==id)
    console.log(photo);
    return (
        <div>
            Books details
        </div>
    );
};

export default BookDetailsPage;