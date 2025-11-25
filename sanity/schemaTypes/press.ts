import { defineField, defineType } from 'sanity'

export const pressType = defineType({
  name: 'press',
  title: 'Press & Announcements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: '🎥 YouTube Video', value: 'video' },
          { title: '📹 MP4 Video', value: 'mp4' },
          { title: '🖼️ Image', value: 'image' },
          { title: '🎠 Carousel', value: 'carousel' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoId',
      title: 'YouTube Video URL or ID',
      type: 'string',
      description: '🎬 Paste full YouTube URL (https://www.youtube.com/watch?v=dEwj38nw83Y) or just the video ID (dEwj38nw83Y)',
      placeholder: 'https://www.youtube.com/watch?v=dEwj38nw83Y or dEwj38nw83Y',
      hidden: ({ parent }) => parent?.type !== 'video',
      validation: (rule) =>
        rule.custom((videoId, context) => {
          const parent = context.parent as any
          if (parent?.type === 'video' && !videoId) {
            return 'YouTube Video URL or ID is required for video type'
          }
          
          // Validate if it's a valid YouTube URL or ID
          if (videoId) {
            const youtubeRegex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})|^([a-zA-Z0-9_-]{11})$/
            if (!youtubeRegex.test(videoId)) {
              return 'Please enter a valid YouTube URL or 11-character video ID'
            }
          }
          
          return true
        }),
    }),
    defineField({
      name: 'videoFile',
      title: 'MP4 Video File',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) => parent?.type !== 'mp4',
      validation: (rule) =>
        rule.custom((videoFile, context) => {
          const parent = context.parent as any
          if (parent?.type === 'mp4' && !videoFile) {
            return 'MP4 video file is required for mp4 type'
          }
          return true
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.type !== 'image',
      validation: (rule) =>
        rule.custom((image, context) => {
          const parent = context.parent as any
          if (parent?.type === 'image' && !image) {
            return 'Image is required for image type'
          }
          return true
        }),
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'url',
      description: 'External link for the image (e.g., Spotify, YouTube)',
      hidden: ({ parent }) => parent?.type !== 'image',
    }),
    defineField({
      name: 'carousel',
      title: 'Carousel Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'itemType',
              title: 'Item Type',
              type: 'string',
              options: {
                list: [
                  { title: 'MP4 Video', value: 'mp4' },
                  { title: 'Image', value: 'image' },
                ],
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'videoFile',
              title: 'MP4 Video',
              type: 'file',
              options: {
                accept: 'video/mp4',
              },
              hidden: ({ parent }) => parent?.itemType !== 'mp4',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.itemType !== 'image',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
          preview: {
            select: {
              itemType: 'itemType',
              description: 'description',
            },
            prepare({ itemType, description }) {
              return {
                title: description || 'Carousel Item',
                subtitle: itemType === 'mp4' ? '📹 MP4 Video' : '🖼️ Image',
              }
            },
          },
        },
      ],
      hidden: ({ parent }) => parent?.type !== 'carousel',
      validation: (rule) =>
        rule.custom((carousel, context) => {
          const parent = context.parent as any
          if (parent?.type === 'carousel' && (!carousel || carousel.length === 0)) {
            return 'At least one carousel item is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this item on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ title, type, order, isActive }) {
      const typeEmoji = {
        video: '🎥',
        mp4: '📹',
        image: '🖼️',
        carousel: '🎠',
      }[type as string] || '📄'
      
      return {
        title: `${typeEmoji} ${title}`,
        subtitle: `Order: ${order} | ${isActive ? '✅ Active' : '❌ Inactive'}`,
      }
    },
  },
})
