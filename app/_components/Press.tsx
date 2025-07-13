import React from 'react';
import Image from 'next/image';

const PressSection = () => {
  const pressItems = [
    {
      title: 'NTV Backstage Pass with Amanda Mews',
      image: 'https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/754692d0d5c0419beccc89e63bd09bdf04925c48/original/screenshot-2024-10-10-at-01-43-52-backstage-pass-highlighting-singer-songwriter-becca-bartlett-ntv.png/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjoxLCJ0b3AiOjEsIndpZHRoIjoxMjIyLCJoZWlnaHQiOjY4Nn1dLFsicmVzaXplIiw2NjBdLFsibWF4Il0sWyJ3ZSJdXQ%3D%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png',
      link: 'https://ntv.ca/backstage-pass-highlighting-singer-songwriter-becca-bartlett/',
      type: 'image'
    },
    {
      title: 'Pharos Music Roster',
      image: 'https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/71987d76e472af3bbd2d391e27dd25bfbfdcd7d4/original/screenshot-2024-10-10-at-01-32-35-3-facebook.png/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjo2MjQsImhlaWdodCI6NjI0fV0sWyJyZXNpemUiLDYyNV0sWyJtYXgiXSxbIndlIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png',
      link: 'https://pharosmusic.ca',
      type: 'image'
    },
    {
      title: 'The Hulk Caesar Show',
      videoId: 'RE9zEFtchq8',
      description: 'Becca Bartlett as Musical Guest on the Hulk Caesar show Featuring Adam Walsh',
      type: 'video'
    }
  ];

  const additionalPress = [
    {
      title: 'Musical connections: NextIIConnect Podcast with Zach Snow',
      videoId: '7CmejIU4jG0',
      type: 'video'
    },
    {
      title: 'MusicNL Pop Artist of the Year Nomination',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      title: 'Unlicensed Philosophy with Chuong Nguyen',
      videoId: 'wMSEVArzIcQ',
      type: 'video'
    }
  ];

  return (
    <section id="press-announcements" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Press/Announcements
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
