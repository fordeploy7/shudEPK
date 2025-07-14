"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-black text-white p-8" id="listen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wider mb-8">LISTEN</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Album Covers */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                  <img src="/images/gallery/nazraan.jpg" alt="nazraan" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-2">NAZRAAN</h3>
                  <a
                    href="https://open.spotify.com/track/7aYjsaU1i3dyde8rYEzviw?si=f967e24def63410e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-black transition-colors">
                      STREAM NOW!
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                  <img src="/images/gallery/baarish.jpg" alt="baarish" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-2">BAARISH</h3>
                  <a
                    href="https://open.spotify.com/track/4qoXR4juENBxPAoLfOJibb?si=09aa445461a649ea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-black transition-colors">
                    STREAM NOW!
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Spotify Embed */}
            <div className="rounded-xl overflow-hidden">
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
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg aspect-square flex items-center justify-center">
              <img src="/images/gallery/pfp.jpg" alt="pfp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;
