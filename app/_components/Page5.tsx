import React from 'react';

const Page5 = () => {
  return (
    <section 
      id="merch" 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/05cc6cc9314248eb57f04c7a0b91cb89adff37b7/original/sun-and-moon-in-purple-sky-as4snxrlv8r2084h.jpg/!!/b%3AW1sicmVzaXplIiwzMjAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%'
      }}
    >
      <div className="absolute inset-0 bg-black/0 bg-opacity-30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-wide">
          Merch
        </h2>
        
        <div className="bg-black bg-opacity-70 rounded-lg p-8">
          <p className="text-2xl text-white font-semibold">
            Coming soon…
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Exclusive merchandise and apparel will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page5;
