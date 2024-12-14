/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts' // 127
// import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts' // 128
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type React from 'react'

import './custom.scss'
// import type { ServerFunctionClient } from 'payload' // 128
import { importMap } from './admin/importMap'

type Args = {
	children: React.ReactNode
}

/*const serverFunction: ServerFunctionClient = async (args) => { // 128
	'use server'

	return handleServerFunctions({
		...args,
		config,
		importMap,
	})
}*/

const Layout = ({ children }: Args) => (
	<RootLayout
		importMap={importMap}
		config={config}
		// serverFunction={serverFunction} // 128
	>
		{children}
	</RootLayout>
)

export default Layout
