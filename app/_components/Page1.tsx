import React from 'react';
import { Instagram, Music, Facebook, Youtube, Volume2, Music2 } from 'lucide-react';
import { FaSnapchatGhost } from 'react-icons/fa';
import { archivo, dafoe } from '../lib/fonts';

const BeccaBartlettPage = () => {
  return (
    <div className="min-h-screen h-screen sm:h-[50rem] relative" id='home'>
       
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
        style={{
          backgroundImage: `url('/images/artist/shudhita_home1.jpeg')`,
        }}
      >
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex justify-center items-center pt-4 sm:pt-8 pb-2 sm:pb-4 px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="https://www.instagram.com/shudhitaa/" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://music.apple.com/in/artist/shudhita/1183717951" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Music className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.facebook.com/p/Shudhita-100082606187836/" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.youtube.com/@shudhitaa" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://open.spotify.com/artist/0JefaKlCFCFu9LEzF9diAm" className="text-white hover:text-purple-200 transition-colors duration-300">
              <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://www.snapchat.com/@shudhitaaaa" className="text-white hover:text-purple-200 transition-colors duration-300">
              <FaSnapchatGhost className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 sm:px-8">
          <div className="text-center max-w-full">
            <h1 className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 sm:mb-8 transform -rotate-1 sm:-rotate-2">
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