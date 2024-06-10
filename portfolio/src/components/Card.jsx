import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,jpeg.webp,webp}');

export default function Card({ item }) {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const path = item.image.replace('src/assets/', '../assets/');
            const imageModule = await images[path]();
            setImageSrc(imageModule.default);
        };

        loadImage();
    }, [item.image]);

    return (
        <div 
        className="m-4 w-1/3 p-2 rounded overflow-hidden shadow-lg bg-inherit transition-transform hover:shadow-yellow-800/80 hover:scale-105">
            {imageSrc && <img   className="m-2 max-h-64 min-h-64 w-96 object-cover"
                                src={imageSrc} alt={item.name} />}
            <div >
                <h1 className="text-inherit font-bold text-xl underline text-md mb-2">{item.name}</h1>
                <p className="mx-2">{item.description}</p>
                <p className="my-2 text-yellow-800 font-xs underline italic">
                    <a href={item.link}>{item.link}</a>
                    </p>
            </div>
        </div>
    );
}