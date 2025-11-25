import { type SchemaTypeDefinition } from 'sanity'
import { pressType } from './press'
import { galleryType } from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pressType, galleryType],
}

export const schemaTypes = [pressType, galleryType]
