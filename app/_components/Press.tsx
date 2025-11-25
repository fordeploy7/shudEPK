'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type VideoPress = {
  title: string;
  videoId: string;
  description?: string;
  type: 'video';
};

type Mp4Press = {
  title: string;
  videoFile: {
    asset: {
      url: string;
    };
  };
  description?: string;
  type: 'mp4';
};

type ImagePress = {
  title: string;
  image: any;
  link?: string;
  type: 'image';
};

type CarouselItem = {
  _key: string;
  itemType: 'mp4' | 'image';
  videoFile?: {
    asset: {
      url: string;
    };
  };
  image?: any;
  description?: string;
};

type CarouselPress = {
  title: string;
  carousel: CarouselItem[];
  type: 'carousel';
};

type PressItem = VideoPress | Mp4Press | ImagePress | CarouselPress;

// Helper function to extract YouTube video ID from URL or return the ID itself
const extractYouTubeId = (input: string): string => {
  if (!input) return '';
  
  // If it's already just an ID (11 characters), return it
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input;
  }
  
  // Extract ID from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/
  ];
  
  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // If no pattern matches, return the input as-is (might be a direct ID)
  return input;
};

const PressSection = () => {
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all items from Sanity
  useEffect(() => {
    const fetchPressItems = async () => {
      try {
        const query = `*[_type == "press" && isActive == true] | order(order asc) {
          _id,
          title,
          description,
          type,
          videoId,
          videoFile {
            asset-> {
              url
            }
          },
          image,
          link,
          carousel[] {
            _key,
            itemType,
            videoFile {
              asset-> {
                url
              }
            },
            image,
            description
          },
          order
        }`;

        const data = await client.fetch(query);
        
        // Transform Sanity data to match our component types
        const transformedData: PressItem[] = data.map((item: any) => {
          if (item.type === 'video') {
            return {
              title: item.title,
              videoId: extractYouTubeId(item.videoId), // Extract ID from URL or use ID directly
              description: item.description,
              type: 'video'
            };
          } else if (item.type === 'mp4') {
            return {
              title: item.title,
              videoFile: item.videoFile,
              description: item.description,
              type: 'mp4'
            };
          } else if (item.type === 'image') {
            return {
              title: item.title,
              image: item.image,
              link: item.link,
              type: 'image'
            };
          } else if (item.type === 'carousel') {
            return {
              title: item.title,
              carousel: item.carousel,
              type: 'carousel'
            };
          }
          return item;
        });

        setPressItems(transformedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching press items:', error);
        setLoading(false);
      }
    };

    fetchPressItems();
  }, []);

  if (loading) {
    return (
      <section id="press-announcements" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
            Press/Anc.
          </h2>
          <div className="text-white text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="press-announcements" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Press/Anc.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
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
                    <p className="text-white text-sm font-medium">
                      {item.description || item.title}
                    </p>
                  </div>
                </div>
              ) : item.type === 'mp4' ? (
                <div>
                  <div className="aspect-video bg-black">
                    <video
                      src={item.videoFile.asset.url}
                      className="w-full h-full object-contain rounded-t-lg bg-black"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      style={{ backgroundColor: 'black' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">
                      {item.description || item.title}
                    </p>
                  </div>
                </div>
              ) : item.type === 'image' ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="aspect-square relative">
                    <img
                      src={urlFor(item.image).width(800).height(800).url()}
                      alt={item.title}
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </a>
              ) : item.type === 'carousel' ? (
                <div>
                  <div className="aspect-video bg-black">
                    <Swiper spaceBetween={10} slidesPerView={1}>
                      {item.carousel.map((slide) => (
                        <SwiperSlide key={slide._key}>
                          {slide.itemType === 'mp4' && slide.videoFile ? (
                            <video
                              src={slide.videoFile.asset.url}
                              className="w-full h-full object-contain rounded-t-lg bg-black"
                              controls
                              controlsList="nodownload"
                              preload="metadata"
                              style={{ backgroundColor: 'black' }}
                            />
                          ) : slide.itemType === 'image' && slide.image ? (
                            <img
                              src={urlFor(slide.image).width(800).height(450).url()}
                              alt={slide.description || ''}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          ) : null}
                          {slide.description && (
                            <div className="p-2 text-white text-xs">
                              {slide.description}
                            </div>
                          )}
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
      </div>
    </section>
  );
};

export default PressSection;
