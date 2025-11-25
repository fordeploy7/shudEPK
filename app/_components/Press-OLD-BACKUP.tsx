'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type VideoPress = {
  title: string;
  videoId: string;
  description?: string;
  type: 'video';
};

type Mp4Press = {
  title: string;
  videoSrc: string;
  description?: string;
  type: 'mp4';
};

type ImagePress = {
  title: string;
  image: string;
  link?: string;
  type: 'image';
};

type CarouselItem = {
  type: 'mp4' | 'image';
  src: string;
  description?: string;
};

type CarouselPress = {
  title: string;
  carousel: CarouselItem[];
  type: 'carousel';
};

type PressItem = VideoPress | Mp4Press | ImagePress | CarouselPress;

const PressSection = () => {
  const [newPressItems, setNewPressItems] = useState<PressItem[]>([]);

  // Existing hardcoded data - ALWAYS shown first
  const pressItems: PressItem[] = [
    {
      title: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
      videoId: 'dEwj38nw83Y',
      description: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
      type: 'video'
    },
    {
    title: 'Achi Hai',
      videoId: 'BLjDSH0DgOI',
      description: 'One of my most recent works with the amazing NIKK, a duet ‘Achi hai’ which has been getting so much love.',
      type: 'video'
    },
          {
    title: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
      videoId: 'x1Rm2wP9e-s',
      description: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
      type: 'video'
    },
    {
    title: 'Achi Hai',
      videoId: 'Mx2K6Py9ybY',
      description: 'This is my first ever duet with NIKK and has crossed 12 million views now. ',
      type: 'video'
    }, 
    // {
    //   title: 'Performed at Chandigarh University',
    //   image: '/images/gallery/performedatCU.jpg',
    //   link: 'https://pharosmusic.ca',
    //   type: 'image'
    // },

  {
    title: 'I also have sung in two Punjabi movies',
      videoId: 'GIBqMWau_Nc',
      description: 'I also have sung in two Punjabi movies:-One of them being ‘Painter’ in which i sang a duet with the one and only Kamal Khan ji. ',
      type: 'video'
    }, 
//  {
    // title: '2nd Punjabi Movie',
    //   videoId: 'KgsjJ1GMSgE',
    //   description: 'I’ve also sung an english song in the movie ‘Jalwayu enclave ',
    //   type: 'video'
    // }, 

    // {
    //   title: 'At Nirankari Samagam',
    //   videoId: 'fcagGZBVf2k',
    //   description: ' My own original ‘Guru Charna vich ho arpan’, which has over 1 million views. ',
    //   type: 'video'
    // }, 
    // {
    //   title: 'At Nirankari Samagam',
    //   videoId: 'zb3c77OC-jQ',
    //   description: 'Another soulful song ‘Kar tera deedar’ ',
    //   type: 'video'
    // },
    {
      title: 'Rabb Manneya',
      videoId: 'KTcDa-2toWw',
      description: ' Here’s my first ever original- Rabb Manneya’ ',
      type: 'video'
    },
   {
      title: 'Baarish-Single by Shudhita',
      videoId: 'kkTO3aGRNmo',
      type: 'video',
      description: 'Here’s my second original- Baarish’ which is a soulful song.',
    },
    {
      title: 'Nazraan-Latest Released Single',
      videoId: 'pE-ooTVqt6I',
      description: "Nazraan-Latest Released Single",
      type: 'video'
    },
  ];
  
  const additionalPress = [
    // {
    //   title: 'Nazraan-Latest Released Single',
    //   videoId: 'pE-ooTVqt6I',
    //   description: "Nazraan-Latest Released Single",
    //   type: 'video'
    // },
    {
      title: 'At Chandigarh University',
      videoSrc: '/videos/cuperformence.mp4',
      description: 'Perfomed At Chandigarh University with a huge audience.',
      type: 'mp4'
    },
    {
      title: 'At SARAS Mela Ludhiana 2025 with huge Audience',
      carousel: [
        { type: 'mp4', src: '/videos/sarasludhiana2025.mp4', description: 'Perfomed At SARAS Mela (Swipe to see more)' },
        { type: 'mp4', src: '/videos/sarasvideo2.mp4', description: '(Swipe to see more)' },
        { type: 'image', src: '/images/gallery/sarasimage1.jpg', description: '(Swipe to see more)' },
         { type: 'mp4', src: '/videos/sarasvideo3.mp4', description: '(Swipe to see more)' },
        { type: 'image', src: '/images/gallery/sarasimage2.jpg', description: '(Swipe to see more)' },
        { type: 'image', src: '/images/gallery/sarasimage3.jpg', description: '(Swipe to see more)' },
        { type: 'image', src: '/images/gallery/sarasimage4.jpg', description: '' },
      ],
      type: 'carousel'
    },
    {
      title: 'Tum-Single by Shudhita',
      image: 'images/gallery/tumsong.jpg',
      link:'https://open.spotify.com/track/2b0EOW81hPUIrWc7AhcGsg?si=9036c7f6b5e04297',
      type: 'image'
    },
  ];

  // Fetch new items from MongoDB
  useEffect(() => {
    const fetchNewPressItems = async () => {
      try {
        const response = await fetch('/api/press');
        const data = await response.json();

        if (data.success && data.data.length > 0) {
          setNewPressItems(data.data);
        }
      } catch (error) {
        console.error('Error fetching new press items:', error);
      }
    };

    fetchNewPressItems();
  }, []);

  // Separate new items by type
  const newYouTubeVideos = newPressItems.filter(item => item.type === 'video');
  const newMp4Videos = newPressItems.filter(item => item.type === 'mp4');
  const newOtherItems = newPressItems.filter(item => item.type !== 'video' && item.type !== 'mp4');

  return (
    <section id="press-announcements" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Press/Anc.
        </h2>

        {/* Old YouTube videos (pressItems) - renders first */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {pressItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              {item.type === 'video' ? (
                <div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* New YouTube videos from MongoDB - renders AFTER old YouTube videos */}
        {newYouTubeVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {newYouTubeVideos.map((item, index) => (
              <div key={`new-youtube-${index}`} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${(item as VideoPress).videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{(item as VideoPress).description ?? item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Old MP4/Carousel/Image items (additionalPress) - renders after all YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {additionalPress.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              {item.type === 'image' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-square relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </a>
              ) : item.type === 'carousel' && Array.isArray(item.carousel) ? (
                <div>
                  <div className="aspect-video bg-black">
                    <Swiper spaceBetween={10} slidesPerView={1}>
                      {item.carousel.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                          {slide.type === 'mp4' ? (
                            <video
                              src={slide.src}
                              className="w-full h-full object-contain rounded-t-lg bg-black"
                              controls
                              controlsList="nodownload"
                              preload="metadata"
                              style={{ backgroundColor: 'black' }}
                            />
                          ) : (
                            <img
                              src={slide.src}
                              alt={slide.description}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          )}
                          <div className="p-2 text-white text-xs">{slide.description}</div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              ) : item.type === 'mp4' && 'videoSrc' in item ? (
                <div>
                  <div className="aspect-video bg-black">
                    <video
                      src={(item as Mp4Press).videoSrc}
                      className="w-full h-full object-contain rounded-t-lg bg-black"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      style={{ backgroundColor: 'black' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{(item as Mp4Press).description ?? ''}</p>
                  </div>
                </div>
              ) : item.type === 'video' && 'videoId' in item ? (
                <div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${(item as VideoPress).videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{(item as VideoPress).description ?? ''}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* New MP4 videos from MongoDB - renders AFTER old MP4 videos */}
        {newMp4Videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {newMp4Videos.map((item, index) => (
              <div key={`new-mp4-${index}`} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div>
                  <div className="aspect-video bg-black">
                    <video
                      src={(item as Mp4Press).videoSrc}
                      className="w-full h-full object-contain rounded-t-lg bg-black"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      style={{ backgroundColor: 'black' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{(item as Mp4Press).description ?? item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* New other items (carousel/image) from MongoDB */}
        {newOtherItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newOtherItems.map((item, index) => (
              <div key={`new-other-${index}`} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                {item.type === 'image' ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-square relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </a>
                ) : item.type === 'carousel' && Array.isArray(item.carousel) ? (
                  <div>
                    <div className="aspect-video bg-black">
                      <Swiper spaceBetween={10} slidesPerView={1}>
                        {item.carousel.map((slide, idx) => (
                          <SwiperSlide key={idx}>
                            {slide.type === 'mp4' ? (
                              <video
                                src={slide.src}
                                className="w-full h-full object-contain rounded-t-lg bg-black"
                                controls
                                controlsList="nodownload"
                                preload="metadata"
                                style={{ backgroundColor: 'black' }}
                              />
                            ) : (
                              <img
                                src={slide.src}
                                alt={slide.description}
                                className="w-full h-full object-cover rounded-t-lg"
                              />
                            )}
                            <div className="p-2 text-white text-xs">{slide.description}</div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="p-4">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PressSection;
