'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type VideoPress = {
  title: string;
  videoId: string;
  description: string;
  type: 'video';
};

type Mp4Press = {
  title: string;
  videoSrc: string;
  description: string;
  type: 'mp4';
};

type ImagePress = {
  title: string;
  image: string;
  link: string;
  type: 'image';
};

type PressItem = VideoPress | ImagePress;

const PressSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainGridRef = useRef<HTMLDivElement>(null);
  const additionalGridRef = useRef<HTMLDivElement>(null);
  const mainItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const additionalItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      description: 'One of my most recent works with the amazing NIKK, a duet Achi hai which has been getting so much love.',
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
    {
      title: 'I also have sung on two Punjabi movies',
      videoId: 'GIBqMWau_Nc',
      description: 'I also have sung on two Punjabi movies:-One of them being Painter in which i sang a duet with the one and only Kamal Khan ji. ',
      type: 'video'
    },
    {
      title: 'At Nirankari Samagam',
      videoId: 'fcagGZBVf2k',
      description: ' My own original Guru Charna vich ho arpan, which has over 1 million views. ',
      type: 'video'
    },
    {
      title: 'At Nirankari Samagam',
      videoId: 'zb3c77OC-jQ',
      description: 'Another soulful song Kar tera deedar ',
      type: 'video'
    },
    {
      title: 'Rabb Manneya',
      videoId: 'KTcDa-2toWw',
      description: ' Heres my first ever original- Rabb Manneya',
      type: 'video'
    },
    {
      title: 'Baarish-Single by Shudhita',
      videoId: 'kkTO3aGRNmo',
      type: 'video',
      description: 'Here"s my second original- Baarish which is a soulful song.',
    }
  ];

  const additionalPress = [
    {
      title: 'Nazraan-Latest Released Single',
      videoId: 'pE-ooTVqt6I',
      type: 'video'
    },
    {
      title: 'At Chandigarh University',
      videoSrc: '/videos/cuperformence.mp4',
      description: 'Perfomed At Chandigarh University with a huge audience.',
      type: 'mp4'
    },
    {
      title: 'Tum-Single by Shudhita',
      image: 'images/gallery/tumsong.jpg',
      link: 'https://open.spotify.com/track/2b0EOW81hPUIrWc7AhcGsg?si=9036c7f6b5e04297',
      type: 'image'
    },
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === 'undefined') return;

      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Set initial states
          gsap.set(titleRef.current, { 
            opacity: 0, 
            y: 50,
            rotationX: 15
          });

          gsap.set(mainItemsRef.current, { 
            opacity: 0, 
            y: 80,
            scale: 0.8,
            rotationY: 5
          });

          gsap.set(additionalItemsRef.current, { 
            opacity: 0, 
            y: 80,
            scale: 0.8,
            rotationY: -5
          });

          // Title Animation - Dramatic entrance
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });

          // Main grid items - Staggered animation with parallax
          gsap.to(mainItemsRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.8,
              from: "start"
            },
            scrollTrigger: {
              trigger: mainGridRef.current,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });

          // Additional grid items - Different stagger pattern
          gsap.to(additionalItemsRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power2.out",
            stagger: {
              amount: 0.6,
              from: "end"
            },
            scrollTrigger: {
              trigger: additionalGridRef.current,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });

          // Parallax effect for the entire section
          gsap.to(containerRef.current, {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true
            }
          });

          // Individual card hover enhancements
          mainItemsRef.current.forEach((item, index) => {
            if (item) {
              const video = item.querySelector('iframe, video');
              const textContent = item.querySelector('.text-content');
              
              if (video) {
                gsap.set(video, { scale: 1 });
                
                // Scroll-based scale animation
                gsap.to(video, {
                  scale: 1.05,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 70%",
                    end: "bottom 30%",
                    scrub: 0.5,
                    invalidateOnRefresh: true
                  }
                });
              }

              if (textContent) {
                gsap.fromTo(textContent, 
                  { opacity: 0, y: 20 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: item,
                      start: "top 70%",
                      toggleActions: "play none none reverse",
                      invalidateOnRefresh: true
                    }
                  }
                );
              }
            }
          });

          // Additional items animations
          additionalItemsRef.current.forEach((item, index) => {
            if (item) {
              const media = item.querySelector('iframe, video, img');
              const textContent = item.querySelector('.text-content');
              
              if (media) {
                gsap.set(media, { scale: 1 });
                
                // Parallax effect for media
                gsap.to(media, {
                  scale: 1.08,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 0.3,
                    invalidateOnRefresh: true
                  }
                });
              }

              if (textContent) {
                gsap.fromTo(textContent, 
                  { opacity: 0, y: 15 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                      trigger: item,
                      start: "top 75%",
                      toggleActions: "play none none reverse",
                      invalidateOnRefresh: true
                    }
                  }
                );
              }
            }
          });

          // Background parallax effect
          const bgParallax = gsap.to({}, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                if (containerRef.current) {
                  gsap.set(containerRef.current, {
                    backgroundPosition: `center ${progress * 30}px`
                  });
                }
              },
              invalidateOnRefresh: true
            }
          });

        }, containerRef);

        // Performance optimization
        ScrollTrigger.addEventListener("refresh", () => {
          ScrollTrigger.update();
        });

        return () => {
          ctx.revert();
        };

      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="press-announcements" 
      className="py-16 bg-black overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide"
          style={{ willChange: 'transform' }}
        >
          Press/Anc.
        </h2>

        {/* Main press items */}
        <div 
          ref={mainGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pressItems.map((item, index) => (
            <div
              key={index}
          ref={el => { mainItemsRef.current[index] = el; }}

              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              style={{ willChange: 'transform' }}
            >
              {item.type === 'image' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium text-content">{item.title}</p>
                  </div>
                </a>
              ) : (
                <div>
                  <div className="aspect-video overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium text-content">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          ref={additionalGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {additionalPress.map((item, index) => (
            <div
              key={index}
             ref={el => { additionalItemsRef.current[index] = el; }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              style={{ willChange: 'transform' }}
            >
              {item.type === 'image' ? (
                <div>
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium text-content">{item.title}</p>
                  </div>
                </div>
              ) : item.type === 'mp4' ? (
                <div>
                  <div className="h-80 md:h-96 overflow-hidden">
                    <video
                      src={item.videoSrc}
                      className="w-full h-full object-cover rounded-t-lg"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium text-content">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="aspect-video overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium text-content">{item.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;