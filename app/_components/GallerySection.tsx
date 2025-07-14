"use client"
import React from 'react';

const PhotoGallery = () => {
  const images = [
    {
      thumb: "/images/gallery/achihai.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/baarish.jpg",
      orientation: "landscape"
    },
    {
      thumb:"/images/gallery/yobaby.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/pyaarkiyahai.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/javansirhind.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/mulaqat.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/onenessTalks.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/performedatCU.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/tumsong.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/onenesstalks2.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/pfp.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/nazraan.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/heer.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/ishqhua.jpg",
      orientation: "landscape"
    },
    {
      thumb: "/images/gallery/pfp3.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/aasma.jpg",
      orientation: "portrait"
    },
    {
      thumb: "/images/gallery/pfp5.jpg",
      orientation: "portrait"
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4" id='gallery'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white-800 mb-4">Photo Gallery</h1>
          <p className="text-slate-600 text-lg">A collection of beautiful images</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
              <img
                key={image.thumb}
                src={image.thumb}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;