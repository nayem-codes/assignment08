import { Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PhotoCard = ({photo}) => {
    return (
        <Card className='border'>
            <div className='relative w-full aspect-square'>
                <Image
                src={photo.image_url}
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className='object-cover rounded-xl'
                />

                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>

            <div>
                <h2>{photo.title}</h2>
            </div>

            <div>
                <p>{photo.available_quantity}</p>
            </div>

            <Separator orientation='vertical'/>

            <div>
                <p>{photo.author}</p>
            </div>
        </Card>
    );
};

export default PhotoCard;