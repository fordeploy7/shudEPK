"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";

interface Song {
  id: number;
  title: string;
  duration: string;
  durationSeconds: number;
  src: string;
}

const Listen: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Animation refs
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const albumRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spotifyRef = useRef<HTMLDivElement>(null);
  const artistPhotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === 'undefined') return;

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Set initial states
        gsap.set([headerRef.current, leftColumnRef.current, rightColumnRef.current], {
          opacity: 0,
          y: 50
        });

        gsap.set(albumRefs.current, {
          opacity: 0,
          scale: 0.8,
          y: 30
        });

        gsap.set([spotifyRef.current, artistPhotoRef.current], {
          opacity: 0,
          x: 50
        });

        // Header animation
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse"
          }
        });

        // Left column animation
        gsap.to(leftColumnRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        });

        // Right column animation
        gsap.to(rightColumnRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        });

        // Album covers staggered animation
        gsap.to(albumRefs.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 70%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        });

        // Spotify embed animation
        gsap.to(spotifyRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: spotifyRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        });

        // Artist photo animation
        gsap.to(artistPhotoRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: artistPhotoRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        });

        // Parallax effect for album covers
        albumRefs.current.forEach((album, index) => {
          if (album) {
            const imageElement = album.querySelector('.album-image');
            if (imageElement) {
              gsap.to(imageElement, {
                y: -20,
                ease: "none",
                scrollTrigger: {
                  trigger: album,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                  invalidateOnRefresh: true
                }
              });
            }
          }
        });

        // Artist photo parallax
        if (artistPhotoRef.current) {
          const artistImage = artistPhotoRef.current.querySelector('.artist-image');
          if (artistImage) {
            gsap.to(artistImage, {
              y: -15,
              ease: "none",
              scrollTrigger: {
                trigger: artistPhotoRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true
              }
            });
          }
        }

        // Hover animations for album covers
        albumRefs.current.forEach((album) => {
          if (album) {
            const overlay = album.querySelector('.album-overlay');
            const button = album.querySelector('.stream-button');
            
            if (overlay && button) {
              album.addEventListener('mouseenter', () => {
                gsap.to(overlay, {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
                gsap.to(button, {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "back.out(1.7)"
                });
              });
              
              album.addEventListener('mouseleave', () => {
                gsap.to(overlay, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
                gsap.to(button, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              });
            }
          }
        });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();

      }, containerRef);

      return () => ctx.revert();
    };

    loadGSAP();

    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white p-8" 
      id="listen"
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            ref={headerRef}
            className="text-4xl font-bold tracking-wider mb-8"
            style={{ willChange: 'transform' }}
          >
            LISTEN
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Album Covers */}
          <div 
            ref={leftColumnRef}
            className="space-y-6"
            style={{ willChange: 'transform' }}
          >
            <div 
              ref={(el) => { albumRefs.current[0] = el; }}
              className="relative group"
              style={{ willChange: 'transform' }}
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center relative">
                  <Image 
                    src="/images/gallery/nazraan.jpg" 
                    alt="nazraan" 
                    fill
                    className="object-cover album-image"
                    quality={90}
                    style={{ willChange: 'transform' }}
                  />
                </div>
              </div>
              <div className="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity">
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-2">NAZRAAN</h3>
                  <a
                    href="https://open.spotify.com/track/7aYjsaU1i3dyde8rYEzviw?si=f967e24def63410e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="stream-button border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-black transition-colors">
                      STREAM NOW!
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div 
              ref={(el) => { albumRefs.current[1] = el; }}
              className="relative group"
              style={{ willChange: 'transform' }}
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center relative">
                 <Image 
                    src="/images/gallery/baarish.jpg" 
                    alt="baarish" 
                    fill
                    className="object-cover album-image"
                    quality={90}
                    style={{ willChange: 'transform' }}
                  />
                </div>
              </div>
              <div className="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity">
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-2">BAARISH</h3>
                  <a
                    href="https://open.spotify.com/track/4qoXR4juENBxPAoLfOJibb?si=09aa445461a649ea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="stream-button border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-black transition-colors">
                      STREAM NOW!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={rightColumnRef}
            className="space-y-6"
            style={{ willChange: 'transform' }}
          >
            {/* Spotify Embed */}
            <div 
              ref={spotifyRef}
              className="rounded-xl overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/0JefaKlCFCFu9LEzF9diAm?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Artist Embed"
              />
            </div>

            {/* Artist Photo */}
            <div 
              ref={artistPhotoRef}
              className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <Image 
                src="/images/gallery/pfp.jpg" 
                alt="pfp" 
                fill
                className="object-cover rounded-lg artist-image"
                quality={90}
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;