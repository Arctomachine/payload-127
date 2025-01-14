import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	admin: {
		enableRichTextLink: false,
	},
	fields: [],
	upload: true,
}
