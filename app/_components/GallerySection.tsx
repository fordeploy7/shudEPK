"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const PhotoGallery = () => {
  const containerRef = useRef(null);
  const gridItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    { thumb: "/images/gallery/achihai.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/baarish.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/yobaby.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/pyaarkiyahai.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/javansirhind.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/mulaqat.jpg", orientation: "portrait" },
    // { thumb: "/images/gallery/onenessTalks.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/performedatCU.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/tumsong.jpg", orientation: "portrait" },
    // { thumb: "/images/gallery/onenesstalks2.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/pfp.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/nazraan.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/heer.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/ishqhua.jpg", orientation: "landscape" },
    { thumb: "/images/gallery/pfp3.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/aasma.jpg", orientation: "portrait" },
    { thumb: "/images/gallery/pfp5.jpg", orientation: "portrait" },
  ];

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
              key={image.thumb}
              ref={el => { gridItemRefs.current[index] = el; }}
              className="relative aspect-square group overflow-hidden rounded-lg will-change-transform"
            >
              <Image
                src={image.thumb}
                alt={`Gallery image ${index + 1}`}
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
