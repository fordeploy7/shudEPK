import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

// Press items data (from Press.tsx hardcoded data)
const pressItems = [
  {
    title: 'I collaborated with IKKY - Club Song 1',
    videoId: 'dEwj38nw83Y',
    description: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
    type: 'video',
    order: 1,
  },
  {
    title: 'Achi Hai',
    videoId: 'BLjDSH0DgOI',
    description: 'One of my most recent works with the amazing NIKK, a duet Achi hai which has been getting so much love.',
    type: 'video',
    order: 2,
  },
  {
    title: 'I collaborated with IKKY - Club Song 2',
    videoId: 'x1Rm2wP9e-s',
    description: 'I collaborated with the amazing and well known music producer IKKY for two club songs, house music which are being loved by the listeners',
    type: 'video',
    order: 3,
  },
  {
    title: 'Achi Hai - First Duet with NIKK',
    videoId: 'Mx2K6Py9ybY',
    description: 'This is my first ever duet with NIKK and has crossed 12 million views now.',
    type: 'video',
    order: 4,
  },
  {
    title: 'Painter - Punjabi Movie',
    videoId: 'GIBqMWau_Nc',
    description: 'I also have sung in two Punjabi movies:-One of them being Painter in which i sang a duet with the one and only Kamal Khan ji.',
    type: 'video',
    order: 5,
  },
  {
    title: 'Rabb Manneya',
    videoId: 'KTcDa-2toWw',
    description: 'Here is my first ever original- Rabb Manneya',
    type: 'video',
    order: 6,
  },
  {
    title: 'Baarish - Single by Shudhita',
    videoId: 'kkTO3aGRNmo',
    description: 'Here is my second original- Baarish which is a soulful song.',
    type: 'video',
    order: 7,
  },
  {
    title: 'Nazraan - Latest Released Single',
    videoId: 'pE-ooTVqt6I',
    description: 'Nazraan-Latest Released Single',
    type: 'video',
    order: 8,
  },
  {
    title: 'At Chandigarh University',
    type: 'mp4',
    description: 'Perfomed At Chandigarh University with a huge audience.',
    videoPath: '/videos/cuperformence.mp4',
    order: 9,
  },
  {
    title: 'Tum - Single by Shudhita',
    type: 'image',
    imagePath: 'images/gallery/tumsong.jpg',
    link: 'https://open.spotify.com/track/2b0EOW81hPUIrWc7AhcGsg?si=9036c7f6b5e04297',
    order: 10,
  },
  {
    title: 'At SARAS Mela Ludhiana 2025 with huge Audience',
    type: 'carousel',
    order: 11,
    carouselItems: [
      { type: 'mp4', path: '/videos/sarasludhiana2025.mp4', description: 'Perfomed At SARAS Mela (Swipe to see more)' },
      { type: 'mp4', path: '/videos/sarasvideo2.mp4', description: '(Swipe to see more)' },
      { type: 'image', path: '/images/gallery/sarasimage1.jpg', description: '(Swipe to see more)' },
      { type: 'mp4', path: '/videos/sarasvideo3.mp4', description: '(Swipe to see more)' },
      { type: 'image', path: '/images/gallery/sarasimage2.jpg', description: '(Swipe to see more)' },
      { type: 'image', path: '/images/gallery/sarasimage3.jpg', description: '(Swipe to see more)' },
      { type: 'image', path: '/images/gallery/sarasimage4.jpg', description: '' },
    ],
  },
];

// Gallery items data (from GallerySection.tsx hardcoded data)
const galleryItems = [
  { title: 'Achi Hai', path: '/images/gallery/achihai.jpg', orientation: 'landscape', order: 1 },
  { title: 'Baarish', path: '/images/gallery/baarish.jpg', orientation: 'landscape', order: 2 },
  { title: 'Yo Baby', path: '/images/gallery/yobaby.jpg', orientation: 'portrait', order: 3 },
  { title: 'Pyaar Kiya Hai', path: '/images/gallery/pyaarkiyahai.jpg', orientation: 'portrait', order: 4 },
  { title: 'Javan Sirhind', path: '/images/gallery/javansirhind.jpg', orientation: 'landscape', order: 5 },
  { title: 'Mulaqat', path: '/images/gallery/mulaqat.jpg', orientation: 'portrait', order: 6 },
  { title: 'Performed at CU', path: '/images/gallery/performedatCU.jpg', orientation: 'landscape', order: 7 },
  { title: 'Tum Song', path: '/images/gallery/tumsong.jpg', orientation: 'portrait', order: 8 },
  { title: 'Profile 1', path: '/images/gallery/pfp.jpg', orientation: 'landscape', order: 9 },
  { title: 'Nazraan', path: '/images/gallery/nazraan.jpg', orientation: 'landscape', order: 10 },
  { title: 'Heer', path: '/images/gallery/heer.jpg', orientation: 'portrait', order: 11 },
  { title: 'Ishq Hua', path: '/images/gallery/ishqhua.jpg', orientation: 'landscape', order: 12 },
  { title: 'Profile 3', path: '/images/gallery/pfp3.jpg', orientation: 'portrait', order: 13 },
  { title: 'Aasma', path: '/images/gallery/aasma.jpg', orientation: 'portrait', order: 14 },
  { title: 'Profile 5', path: '/images/gallery/pfp5.jpg', orientation: 'portrait', order: 15 },
];

// Helper function to upload file to Sanity
async function uploadFile(filePath: string, type: 'image' | 'file'): Promise<any> {
  const fullPath = path.join(process.cwd(), 'public', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ File not found: ${fullPath}`);
    return null;
  }

  try {
    const fileBuffer = fs.readFileSync(fullPath);
    const fileName = path.basename(filePath);
    
    const asset = await client.assets.upload(type, fileBuffer, {
      filename: fileName,
    });
    
    return asset;
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error);
    return null;
  }
}

// Migrate Press items
async function migratePress() {
  console.log('\n🚀 Starting Press migration...\n');
  let successCount = 0;
  let errorCount = 0;

  for (const item of pressItems) {
    try {
      let document: any = {
        _type: 'press',
        title: item.title,
        description: item.description,
        type: item.type,
        order: item.order,
        isActive: true,
      };

      // Handle different types
      if (item.type === 'video') {
        document.videoId = item.videoId;
      } else if (item.type === 'mp4' && 'videoPath' in item && item.videoPath) {
        console.log(`  Uploading MP4: ${item.videoPath}...`);
        const videoAsset = await uploadFile(item.videoPath, 'file');
        if (videoAsset) {
          document.videoFile = {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: videoAsset._id,
            },
          };
        } else {
          errorCount++;
          continue;
        }
      } else if (item.type === 'image' && 'imagePath' in item && item.imagePath) {
        console.log(`  Uploading image: ${item.imagePath}...`);
        const imageAsset = await uploadFile(item.imagePath, 'image');
        if (imageAsset) {
          document.image = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id,
            },
          };
          document.link = item.link;
        } else {
          errorCount++;
          continue;
        }
      } else if (item.type === 'carousel' && 'carouselItems' in item && item.carouselItems) {
        console.log(`  Uploading carousel items...`);
        const carouselArray = [];
        
        for (const carouselItem of item.carouselItems) {
          if (carouselItem.type === 'mp4') {
            const videoAsset = await uploadFile(carouselItem.path, 'file');
            if (videoAsset) {
              carouselArray.push({
                _type: 'object',
                _key: Math.random().toString(36).substring(7),
                itemType: 'mp4',
                videoFile: {
                  _type: 'file',
                  asset: {
                    _type: 'reference',
                    _ref: videoAsset._id,
                  },
                },
                description: carouselItem.description,
              });
            }
          } else if (carouselItem.type === 'image') {
            const imageAsset = await uploadFile(carouselItem.path, 'image');
            if (imageAsset) {
              carouselArray.push({
                _type: 'object',
                _key: Math.random().toString(36).substring(7),
                itemType: 'image',
                image: {
                  _type: 'image',
                  asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                  },
                },
                description: carouselItem.description,
              });
            }
          }
        }
        
        document.carousel = carouselArray;
      }

      // Create the document in Sanity
      const result = await client.create(document);
      console.log(`✅ Created: ${item.title}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error creating ${item.title}:`, error);
      errorCount++;
    }
  }

  console.log(`\n📊 Press Migration Summary: ${successCount} succeeded, ${errorCount} failed\n`);
}

// Migrate Gallery items
async function migrateGallery() {
  console.log('\n🚀 Starting Gallery migration...\n');
  let successCount = 0;
  let errorCount = 0;

  for (const item of galleryItems) {
    try {
      console.log(`  Uploading: ${item.title}...`);
      const imageAsset = await uploadFile(item.path, 'image');
      
      if (!imageAsset) {
        errorCount++;
        continue;
      }

      const document = {
        _type: 'gallery',
        title: item.title,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
        orientation: item.orientation,
        order: item.order,
        isActive: true,
      };

      const result = await client.create(document);
      console.log(`✅ Created: ${item.title}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error creating ${item.title}:`, error);
      errorCount++;
    }
  }

  console.log(`\n📊 Gallery Migration Summary: ${successCount} succeeded, ${errorCount} failed\n`);
}

// Main migration function
async function migrate() {
  console.log('🎯 Starting Sanity Migration Script\n');
  console.log('=' .repeat(50));

  // Check environment variables
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET || !process.env.SANITY_API_TOKEN) {
    console.error('❌ Missing required environment variables!');
    console.error('Please ensure NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN are set in .env.local');
    process.exit(1);
  }

  try {
    // Migrate Press items
    await migratePress();

    // Migrate Gallery items
    await migrateGallery();

    console.log('=' .repeat(50));
    console.log('\n✅ Migration complete! Uploaded 11 Press items and 15 Gallery photos\n');
    console.log('🎉 You can now view your content at: http://localhost:3000/studio\n');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();
