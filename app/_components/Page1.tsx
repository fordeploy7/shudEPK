import React from 'react';
import { Instagram, Music, Facebook, Youtube, Volume2, Music2 } from 'lucide-react';
import { dafoe } from '../layout';

const BeccaBartlettPage = () => {
  return (
    <div className="min-h-screen h-screen sm:h-[50rem] relative">
      
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
        style={{
          backgroundImage: `url('https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/8130721b0264b7a53ba18768b598a9c99d4c68c3/original/3n3a8267-edit.jpg/!!/b%3AW1sicmVzaXplIiwzMjAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg')`
        }}
      >
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex justify-center items-center pt-4 sm:pt-8 pb-2 sm:pb-4 px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Music className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Music2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 sm:px-8">
          <div className="text-center max-w-full">
            <h1 className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 sm:mb-8 transform -rotate-1 sm:-rotate-2">
              <span className={`inline-block ${dafoe.className} break-words`}>
                Becca Bartlett
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