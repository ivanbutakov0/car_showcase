'use client'

import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ShowMore = () => {
	const router = useRouter()
	const [limit, setLimit] = useState(20)
	console.log(limit)

	const handleSubmit = () => {
		const newPathName = updateSearchParams('limit', limit.toString())
		router.push(newPathName, { scroll: false })

		if (limit < 60) {
			setLimit(limit + 10)
		}
	}

	return (
		<button
			className={`${
				limit < 60 ? 'block' : 'hidden'
			} py-3 px-6 bg-primary-blue text-white rounded-full`}
			type='button'
			onClick={handleSubmit}
		>
			Show More
		</button>
	)
}
export default ShowMore
