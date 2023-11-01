'use client'

import { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')

	return (
		<form className='bg-blue-50 rounded-full flex items-center'>
			<div>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}
export default SearchBar
