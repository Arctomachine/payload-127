import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Pages } from '@/collections/Pages'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { ru } from 'payload/i18n/ru'
import sharp from 'sharp'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const payloadConfig = buildConfig
export default payloadConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media, Pages],
	globals: [],
	editor: slateEditor({}),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || '',
	}),
	sharp,
	plugins: [
		// storage-adapter-placeholder
		seoPlugin({
			collections: ['pages'],
			uploadsCollection: 'media',
		}),
	],
	i18n: {
		supportedLanguages: {
			ru,
			en,
		},
	},
})
