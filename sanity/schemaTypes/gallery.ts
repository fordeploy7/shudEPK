import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Photo Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for reference (not shown on website)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape (Horizontal)', value: 'landscape' },
          { title: 'Portrait (Vertical)', value: 'portrait' },
        ],
      },
      validation: (rule) => rule.required(),
      description: 'Select the orientation of the image for proper grid layout',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first in the gallery',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this photo on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      orientation: 'orientation',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ title, image, orientation, order, isActive }) {
      const orientationEmoji = orientation === 'landscape' ? '🖼️' : '🖼️'
      return {
        title: `${orientationEmoji} ${title}`,
        subtitle: `${orientation} | Order: ${order} | ${isActive ? '✅ Active' : '❌ Inactive'}`,
        media: image,
      }
    },
  },
})
