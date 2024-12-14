import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(['development', 'production', 'test'])
			.default('development'),
		PAYLOAD_SECRET: z.string(),
		DATABASE_URI: z.string(),
	},
	clientPrefix: 'NEXT_PUBLIC_',
	client: {
		NEXT_PUBLIC_APP_URL: z.string(),
	},
	runtimeEnv: {
		...process.env,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	},
	emptyStringAsUndefined: true,
})

export default env
