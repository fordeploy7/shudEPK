'use client';

import React, { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { Instagram, Music, Facebook, Youtube, Volume2, Music2 } from 'lucide-react';
import { FaSnapchatGhost } from 'react-icons/fa';
import { archivo, dafoe } from '../lib/fonts';
import Image from 'next/image';

const BeccaBartlettPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const socialLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Helper function to add refs to social links
  const addToSocialRefs = (el: HTMLAnchorElement | null, index: number) => {
    if (el) {
      socialLinksRef.current[index] = el;
    }
  };

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        // Set initial states
        gsap.set(headerRef.current, { 
          opacity: 0, 
          y: -50,
          force3D: true 
        });
        
        gsap.set(socialLinksRef.current, { 
          opacity: 0, 
          y: -30,
          scale: 0.8,
          force3D: true 
        });
        
        gsap.set(titleRef.current, { 
          opacity: 0, 
          y: 100,
          scale: 0.9,
          rotationX: 15,
          force3D: true 
        });

        // Background parallax effect
        gsap.to(backgroundRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        // Header animation
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Social links staggered animation
        gsap.to(socialLinksRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Title dramatic entrance
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
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

        // Title floating animation on scroll
        gsap.to(titleRef.current, {
          y: -20,
          rotationZ: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true
          }
        });

        // Social links hover animations (enhanced)
        socialLinksRef.current.forEach((link) => {
          if (link) {
            const icon = link.querySelector('svg');
            if (icon) {
              gsap.set(icon, { force3D: true });
              
              link.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                  scale: 1.2,
                  rotationY: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              });
              
              link.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                  scale: 1,
                  rotationY: 0,
                  duration: 0.4,
                  ease: "power2.out"
                });
              });
            }
          }
        });

        // Advanced scroll-based title effects
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 60%",
          end: "top 20%",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(titleRef.current, {
              textShadow: `0 0 ${20 * progress}px rgba(255, 255, 255, 0.5)`,
              duration: 0.1,
              ease: "none"
            });
          },
          invalidateOnRefresh: true
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
    <div 
      ref={containerRef}
      className="min-h-screen h-screen sm:h-[50rem] relative overflow-hidden" 
      id='home'
      style={{ willChange: 'transform' }}
    >
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/images/artist/shudhita_home1.jpeg"
          alt="Shudhita background"
          fill
          className="bg-cover bg-center sm:bg-[center_top] bg-no-repeat object-cover object-center sm:object-[center_top]"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header 
          ref={headerRef}
          className="flex justify-center items-center pt-4 sm:pt-8 pb-2 sm:pb-4 px-4"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a 
              ref={(el) => addToSocialRefs(el, 0)}
              href="https://www.instagram.com/shudhitaa/" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a 
              ref={(el) => addToSocialRefs(el, 1)}
              href="https://music.apple.com/in/artist/shudhita/1183717951" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Music className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a 
              ref={(el) => addToSocialRefs(el, 2)}
              href="https://www.facebook.com/p/Shudhita-100082606187836/" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a 
              ref={(el) => addToSocialRefs(el, 3)}
              href="https://www.youtube.com/@shudhitaa" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a 
              ref={(el) => addToSocialRefs(el, 4)}
              href="https://open.spotify.com/artist/0JefaKlCFCFu9LEzF9diAm" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a 
              ref={(el) => addToSocialRefs(el, 5)}
              href="https://www.snapchat.com/@shudhitaaaa" 
              className="text-white hover:text-purple-200 transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <FaSnapchatGhost className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 sm:px-8">
          <div className="text-center max-w-full">
            <h1 
              ref={titleRef}
              className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 sm:mb-8 transform -rotate-1 sm:-rotate-2"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className={`inline-block ${dafoe.className} break-words`}>
                Shudhita
              </span>
            </h1>
          </div>
        </main>

        <div className="h-10 sm:h-20"></div>
      </div>
    </div>
  );
};

export default BeccaBartlettPage;