'use client';

import React, { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { archivo, dafoe } from '../lib/fonts';
import Image from 'next/image';

export default function BeccaBartlettPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Helper function to add refs to paragraphs
  const addToParagraphRefs = (el: HTMLParagraphElement | null, index: number) => {
    if (el) {
      paragraphRefs.current[index] = el;
    }
  };

  // Helper function to add refs to highlights
  const addToHighlightRefs = (el: HTMLSpanElement | null, index: number) => {
    if (el) {
      highlightRefs.current[index] = el;
    }
  };

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        // Set initial states
        gsap.set(imageRef.current, { 
          opacity: 0, 
          x: -100,
          scale: 0.8,
          rotationY: -15,
          force3D: true 
        });
        
        gsap.set(contentRef.current, { 
          opacity: 0, 
          x: 100,
          force3D: true 
        });
        
        gsap.set(paragraphRefs.current, { 
          opacity: 0, 
          y: 50,
          force3D: true 
        });

        gsap.set(highlightRefs.current, { 
          opacity: 0,
          scale: 0.9,
          force3D: true 
        });

        // Image entrance animation
        gsap.to(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Content container animation
        gsap.to(contentRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 45%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Paragraphs staggered animation
        gsap.to(paragraphRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Highlight text animations
        highlightRefs.current.forEach((highlight, index) => {
          if (highlight) {
            gsap.to(highlight, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: highlight,
                start: "top 85%",
                end: "top 65%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true
              }
            });

            // Subtle glow effect on scroll
            ScrollTrigger.create({
              trigger: highlight,
              start: "top 70%",
              end: "bottom 30%",
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(highlight, {
                  textShadow: `0 0 ${10 * progress}px rgba(220, 38, 38, 0.6)`,
                  duration: 0.1,
                  ease: "none"
                });
              },
              invalidateOnRefresh: true
            });
          }
        });

        // Image parallax effect
        gsap.to(imageRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        // Content parallax effect (opposite direction)
        gsap.to(contentRef.current, {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true
          }
        });

        // Advanced text reveal animation for paragraphs
        paragraphRefs.current.forEach((paragraph, index) => {
          if (paragraph) {
            // Split text into words for reveal effect
            const words = paragraph.textContent?.split(' ') || [];
            const wordsHTML = words.map(word => `<span class="word-reveal">${word}</span>`).join(' ');
            paragraph.innerHTML = wordsHTML;

            const wordSpans = paragraph.querySelectorAll('.word-reveal');
            
            gsap.set(wordSpans, { 
              opacity: 0,
              y: 20,
              force3D: true 
            });

            gsap.to(wordSpans, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.03,
              ease: "power2.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: paragraph,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true
              }
            });
          }
        });

        // Image hover effect
        if (imageRef.current) {
          const imageElement = imageRef.current;
          
          imageElement.addEventListener('mouseenter', () => {
            gsap.to(imageElement, {
              scale: 1.05,
              rotationY: 5,
              duration: 0.4,
              ease: "power2.out"
            });
          });
          
          imageElement.addEventListener('mouseleave', () => {
            gsap.to(imageElement, {
              scale: 1,
              rotationY: 0,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }

        // Scroll-based rotation effect for highlights
        highlightRefs.current.forEach((highlight) => {
          if (highlight) {
            ScrollTrigger.create({
              trigger: highlight,
              start: "top 80%",
              end: "bottom 20%",
              onUpdate: (self) => {
                const rotation = self.progress * 2 - 1; // -1 to 1
                gsap.to(highlight, {
                  rotationZ: rotation,
                  duration: 0.1,
                  ease: "none"
                });
              },
              invalidateOnRefresh: true
            });
          }
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
      className="bg-black min-h-screen lg:h-5/6 flex flex-col lg:flex-row mb-20"
      style={{ willChange: 'transform' }}
    >
      <div 
        ref={imageRef}
        className="w-full lg:w-1/2 relative order-1 lg:order-1"
        style={{ willChange: 'transform, opacity' }}
      >
         <Image 
          src="/images/artist/shudhita_home2.jpeg"
          alt="Shudhita"
          width={800}
          height={600}
          className="w-full h-64 sm:h-80 md:h-96 lg:w-5/6 lg:h-5/6 object-cover mx-auto lg:mt-10"
          quality={90}
        />
      </div>

      <div 
        ref={contentRef}
        className="w-full lg:w-1/2 bg-black text-white p-4 sm:p-6 lg:p-5 flex flex-col justify-center relative order-2 lg:order-2"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className={`max-w-full lg:max-w-2lg font-semibold ${archivo.className}`}>
          <p 
            ref={(el) => addToParagraphRefs(el, 0)}
            className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg"
            style={{ willChange: 'transform, opacity' }}
          >
            Shudhita is a passionate and versatile singer whose soul-stirring voice has been capturing hearts across genres and platforms. Seamlessly weaving house, folk, Punjabi, and spiritual music, her performances carry a rare depth and emotional resonance that linger with listeners long after the music stops.

With an impressive and diverse discography, Shudhita has collaborated with <span 
              ref={(el) => addToHighlightRefs(el, 0)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >renowned Producer IKKY on two widely loved club hits in the house music scene.</span> Her vocal presence has also graced the Punjabi film industry, lending her voice to <span 
              ref={(el) => addToHighlightRefs(el, 1)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >"Painter" </span> in a powerful duet with the legendary <span 
              ref={(el) => addToHighlightRefs(el, 2)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >Kamal Khan </span>, as well as an English track featured in the film <span 
              ref={(el) => addToHighlightRefs(el, 3)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            > "Jalwayu Enclave."</span>
          </p>

          <p 
            ref={(el) => addToParagraphRefs(el, 1)}
            className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg"
            style={{ willChange: 'transform, opacity' }}
          >
           A prolific duet artist, Shudhita has worked with acclaimed names such as <span 
              ref={(el) => addToHighlightRefs(el, 4)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >NIKK, Sunny Kahlon, and Balvir Boparai, with tracks like "Achi Hai" and "De Lai Geda" </span>garnering millions of streams and views. Her original releases like <span 
              ref={(el) => addToHighlightRefs(el, 5)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >"Rabb Manneya," "Baarish," "Tum,"</span> and the recent favorite <span 
              ref={(el) => addToHighlightRefs(el, 6)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >"Nazraan"</span> showcase her ability to craft melodies that are both deeply personal and widely relatable.
          </p>

          <p 
            ref={(el) => addToParagraphRefs(el, 2)}
            className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg"
            style={{ willChange: 'transform, opacity' }}
          >
          Beyond mainstream music, Shudhita brings her devotion to life through spiritual compositions such as <span 
              ref={(el) => addToHighlightRefs(el, 7)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >"Guru Charna Vich Ho Arpan," "Kar Tera Deedar," and "Antallah,"</span> the latter of which she composed and performed in Arabic. Her rendition of the Mool Mantar and the deeply moving shabad dedicated to the Chaar Sahibzaade reflect her spiritual grounding and artistic sincerity.
          </p>

          <p 
            ref={(el) => addToParagraphRefs(el, 3)}
            className="text-white leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base lg:text-lg"
            style={{ willChange: 'transform, opacity' }}
          >
          Shudhita has also contributed her voice to impactful causes through the <span 
              ref={(el) => addToHighlightRefs(el, 8)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >Sant Nirankari Charitable Foundation </span>, including the anthem <span 
              ref={(el) => addToHighlightRefs(el, 9)}
              className='text-red-800'
              style={{ willChange: 'transform, opacity' }}
            >"Swach Jal Swach Mann"</span> under Project Amrit, and songs dedicated to World Environment Day and the Oneness Vann initiative.

You can explore her growing musical journey on all major streaming platforms and social media. With every performance, Shudhita invites listeners into a world of melody, meaning, and profound connection. ‎

          </p>

        </div>

       
      </div>
    </div>
  );
}