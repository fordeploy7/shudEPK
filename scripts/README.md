# Sanity Migration Script

This script migrates all hardcoded Press and Gallery data to Sanity CMS.

## What It Does

The migration script will:
- ✅ Upload **11 Press items** to Sanity (8 YouTube videos, 1 MP4, 1 image, 1 carousel)
- ✅ Upload **15 Gallery photos** to Sanity with proper orientation settings
- ✅ Upload all local images and videos to Sanity's CDN
- ✅ Set proper ordering (using the `order` field)
- ✅ Mark all items as active by default

## Prerequisites

1. **Environment Variables**: Ensure you have these in your `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_write_token
   ```

2. **Sanity Write Token**: 
   - Go to https://www.sanity.io/manage
   - Select your project
   - Go to **API** → **Tokens**
   - Create a new token with **Editor** permissions
   - Copy the token and add it to `.env.local` as `SANITY_API_TOKEN`

3. **Files Must Exist**: The script uploads files from `/public` directory:
   - Videos: `/public/videos/` (cuperformence.mp4, saras*.mp4)
   - Images: `/public/images/gallery/` (all gallery images)

## How to Run

```bash
# Run the migration
pnpm migrate

# Or using npm
npm run migrate

# Or directly with tsx
pnpm tsx scripts/migrate-to-sanity.ts
```

## What Gets Migrated

### Press Items (11 total)
1. **YouTube Videos (8)**: 
   - IKKY collaborations (2 club songs)
   - Achi Hai duets with NIKK (2 videos)
   - Painter - Punjabi movie song
   - Rabb Manneya (first original)
   - Baarish (second original)
   - Nazraan (latest single)

2. **MP4 Video (1)**:
   - Chandigarh University performance

3. **Image (1)**:
   - Tum - Single (with Spotify link)

4. **Carousel (1)**:
   - SARAS Mela Ludhiana 2025 (7 items: 3 videos + 4 images)

### Gallery Items (15 total)
- Achi Hai, Baarish, Yo Baby, Pyaar Kiya Hai
- Javan Sirhind, Mulaqat, Performed at CU, Tum Song
- Profile photos, Nazraan, Heer, Ishq Hua, Aasma
- All with proper landscape/portrait orientation

## After Migration

1. **Verify in Studio**: Visit http://localhost:3000/studio
2. **Check Press Section**: All 11 items should be visible
3. **Check Gallery Section**: All 15 photos should be visible
4. **Test Website**: Visit http://localhost:3000 and check both sections

## Troubleshooting

### "Missing required environment variables"
- Make sure `.env.local` has all three Sanity variables
- Restart your terminal/dev server after adding variables

### "File not found" errors
- Ensure all files exist in the `/public` directory
- Check file paths match exactly (case-sensitive)

### "Error uploading" messages
- Check your Sanity token has write permissions
- Verify your internet connection
- Try running the script again (it will skip duplicates)

## Notes

- ⚠️ **Run Once**: This script creates new documents each time. Don't run multiple times or you'll have duplicates.
- 📝 **Idempotent**: If a file fails to upload, you can re-run the script. Already uploaded items will error but won't break anything.
- 🗑️ **Cleanup**: After successful migration and testing, you can delete old MongoDB code and this script.

## Success Output

When successful, you'll see:
```
🎯 Starting Sanity Migration Script
==================================================

🚀 Starting Press migration...
  Uploading MP4: /videos/cuperformence.mp4...
  ✅ Created: At Chandigarh University
  ...
📊 Press Migration Summary: 11 succeeded, 0 failed

🚀 Starting Gallery migration...
  Uploading: Achi Hai...
  ✅ Created: Achi Hai
  ...
📊 Gallery Migration Summary: 15 succeeded, 0 failed

==================================================
✅ Migration complete! Uploaded 11 Press items and 15 Gallery photos
🎉 You can now view your content at: http://localhost:3000/studio
```
