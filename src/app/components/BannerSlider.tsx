"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const items = [
    { id: 1, title: 'Savor the Flavors, Feed Your Soul', url: '/banner1.jpg' },
    { id: 2, title: 'Elevating Taste, One Dish at a Time', url: '/banner2.jpg' },
    { id: 3, title: 'Taste the Art of Food', url: '/banner3.jpg' }
];

const BannerSlider = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <div className="bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Your Restaurant Name</p>
                </div>
            </div>
            {items.map(({ id, title, url }, index) => (
                <div
                    key={id}
                    className={`w-full h-[30vh] transition-opacity duration-500 ${index === currentBannerIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <Image
                        src={url}
                        alt="Banner"
                        layout="fill"
                        objectFit="cover"
                        className="relative"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
                        <button className="px-6 py-2 bg-[#C59D5F] text-white rounded-lg hover:bg-[#A18755] transition duration-300">
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BannerSlider;
