"use client"
import React from 'react';

const PhotoGallery = () => {
  const images = [
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/ad6cbb6a7653352273e9ab8027fc190bb7d7ea8f/original/img-4911-1.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/fecd3efcdcace0f75cea3ea92e6604fb414a021f/original/495446289-10162517253729265-6464004443544166752-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/bb59e3102df2842d283044c6118e42090e636917/original/becc.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/0cfc093381222fb27fe2d2427de56c09210a0254/original/becca-bartlett.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/30dce70746d688e83ac16dae78223a106cf442c3/original/481994364-661018163249158-5981318891302173351-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/b5f3c7008e24a7d8f50ffcade191203ce7d1369f/original/copy-of-becca-bartlett.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/57a81fc43e18a0eeb16dd7af832d57286d82eb9b/original/496331324-1144253957744539-8732015140832609440-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/8b99ed0f683d8888c9b2630e73413ecc6228140a/original/495197436-1633121374004217-785845702510938364-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/dd98478a029affbce441b6527aa7c41661433bc6/original/shleen17-199.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/b82ebd7e9ba0f3835e373a72daf8fd2ef9b8b932/original/img-5064-1.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/73c5ca741c41d92383f81e2eb57c58ff7dd68bf5/original/songwriters-ncircle.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/f6046b60b0e391fa1d2bf5d822e5b596525f66a0/original/meta-eyjzcmncdwnrzxqioijiemdszmlszxmifq.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/d14c3d44aab5b81b27c6a522da746dea885b2eb3/original/becca-bartlett-2024.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/1ad8680bfd7cb996a1dd70c283e8c5659af22780/original/482053560-661012929916348-705077007051171425-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/3d1635d95f397a5b8ac8b5c5581156a8e9047ff0/original/your-paragraph-text.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/7f3b1fc1fc006b1c955a0e5b5aeaf2ea57b34f37/original/screenshot-2024-08-31-at-02-43-18-becca-bartlett-beccabartlettt-instagram-photos-and-videos.png/!!/b%3AW1sic2l6ZSIsIjM1MHgiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "landscape"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/899ff0e9130d2f6ad95f8045ee905c1032e01a94/original/screenshot-2024-08-31-at-02-22-31-becca-bartlett-beccabartlettt-instagram-photos-and-videos.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/94978cc48e232afda1f9b984daf04eb62970b4d8/original/screenshot-2024-08-31-at-02-42-54-becca-bartlett-beccabartlettt-instagram-photos-and-videos.png/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png",
      orientation: "portrait"
    },
    {
      thumb: "//d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/805562/0a4b8b2becdf5daf1093ecb6b589b2e6b31af725/original/271758202-3143721559218006-5628893002731824168-n.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
      orientation: "portrait"
    }
  ];

  return (
    <div className="min-h-screen bg-black  p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Photo Gallery</h1>
          <p className="text-slate-600 text-lg">A collection of beautiful images</p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
              <img
                src={`https:${image.thumb}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;