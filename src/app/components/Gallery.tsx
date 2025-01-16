"use client";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image';

interface Image {
    src: string;
    alt: string;
}

interface GalleryProps {
    images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
    return (
        images && (
            <div className="gallery">
                <PhotoProvider>
                    {images.map((image: Image, index: number) => (
                        <PhotoView key={index} src={image.src}>
                            <Image src={image.src} alt={image.alt} width={600} height={600} />
                        </PhotoView>
                    ))}
                </PhotoProvider>
            </div>
        )
    );
}