import ENV from '@/ENV'
import type { PathRevalidateType } from '@/app/(app)/api/revalidate/route'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'slug',
			label: 'Адрес страницы',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
				components: {
					Description: '@/components/SlugFieldDescription',
				},
			},
		},
		{
			name: 'title',
			label: 'Заголовок',
			type: 'text',
			required: true,
		},
	],
	hooks: {
		afterChange: [
			async (args) => {
				const paths: PathRevalidateType[] = [{ pathname: `/${args.doc.slug}` }]

				await fetch(`${ENV.NEXT_PUBLIC_APP_URL}/api/revalidate`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ paths }),
				})
			},
		],
	},
}
