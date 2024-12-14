'use client'

import { useField, useFormFields } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'
import slugify from 'slugify'

const SlugFieldDescription: TextFieldClientComponent = (props) => {
	const field = useField<string | undefined>({}) // 127
	// @ts-ignore
	// const field = useField<string | undefined>({ path: props.path }) // 128
	const title = useFormFields(([fields]) => fields.title)

	const generatedSlug = slugify(String(title.value), { lower: true })

	function handleClick() {
		field.setValue(generatedSlug)
	}

	return (
		<div>
			<button
				type="button"
				className="btn btn--size-medium btn--style-secondary"
				onClick={handleClick}
			>
				Сгенерировать автоматически
			</button>
		</div>
	)
}

export default SlugFieldDescription
