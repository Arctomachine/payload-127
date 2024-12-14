import { revalidatePath, revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'

export type PathRevalidateType = {
	pathname: string
	type?: 'page' | 'layout'
}

export type TagRevalidateType = string

export async function POST(request: NextRequest) {
	const body = await request.json()
	const paths = body.paths
	const tags = body.tags

	const hasPaths = paths && Array.isArray(paths) && paths.length > 0
	const hasTags = tags && Array.isArray(tags) && tags.length > 0

	if (!hasPaths && !hasTags) {
		return new Response('Missing paths and tags', { status: 400 })
	}

	if (hasPaths) {
		for (const path of paths as PathRevalidateType[]) {
			const revalidateType = path.type ? path.type : 'page'
			if (path.pathname === 'home') {
				revalidatePath('/', revalidateType)
			} else {
				revalidatePath(path.pathname, revalidateType)
			}
		}
	}

	if (hasTags) {
		for (const tag of tags as TagRevalidateType[]) {
			revalidateTag(tag)
		}
	}

	return new Response(null, { status: 200 })
}
