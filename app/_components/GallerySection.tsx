"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type GalleryImage = {
  _id: string;
  title: string;
  image: any;
  orientation: 'landscape' | 'portrait';
  order: number;
};

const PhotoGallery = () => {
  const containerRef = useRef(null);
  const gridItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const query = `*[_type == "gallery" && isActive == true] | order(order asc) {
        _id,
        title,
        image,
        orientation,
        order
      }`;

      const data = await client.fetch(query);
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(gridItemRefs.current, { opacity: 0, y: 40, force3D: true });

        gsap.to(gridItemRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          },
        });
      }, containerRef);

      return () => ctx.revert();
    };

    if (typeof window !== 'undefined') {
      loadGSAP();
    }

    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  if (loading) {
    return (
      <div ref={containerRef} className="min-h-screen bg-black p-4" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-slate-400 text-lg">A collection of beautiful images</p>
          </div>
          <div className="text-white text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black p-4" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-slate-400 text-lg">A collection of beautiful images</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={image._id}
              ref={el => { gridItemRefs.current[index] = el; }}
              className="relative aspect-square group overflow-hidden rounded-lg will-change-transform"
            >
              <Image
                src={urlFor(image.image).width(600).height(600).url()}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
