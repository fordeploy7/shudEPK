import React from 'react';
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
  const pressItems:PressItem[] = [
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
      link:'https://open.spotify.com/track/2b0EOW81hPUIrWc7AhcGsg?si=9036c7f6b5e04297',
      type: 'image'
    },
  ];

  return (
    <section id="press-announcements" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Press/Anc.
        </h2>

        {/* Main press items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pressItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              {item.type === 'image' ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video relative">
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
              ) : (
                <div>
                  <div className="aspect-video ">
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
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalPress.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              {item.type === 'image' ? (
                <div>
                  <div className="aspect-square relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              ) : item.type === 'mp4' ? (
                <div>
                  <div className="h-80 md:h-96">
                    <video
                      src={item.videoSrc}
                      className="w-full h-full object-cover rounded-t-lg"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ) : (
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
                    <p className="text-white text-sm font-medium">{item.title}</p>
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
