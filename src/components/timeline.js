import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

export default function Timeline() {

    const { photos } = usePhotos();

    return <div className="container col-span-2">
        <div className="container col-span-2">
            {!photos ? (
                 <Skeleton count={4} height={320}/>
            ) : (
                photos?.length > 0 ? (
                    photos.map((content) => <p key={content.docId}>{content.imageSrc}</p>)
                ) : (
                    <p className="text-center text-2xl">Follow people to see photos</p>
                )
            )}
        </div>
    </div>;
}