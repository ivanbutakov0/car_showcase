'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchManufacturer } from '.'

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')
	const router = useRouter()

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (manufacturer.trim() === '' && model.trim() === '') {
			return alert('Please provide some input')
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search)

		if (model) {
			searchParams.set('model', model)
		} else {
			searchParams.delete('model')
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer)
		} else {
			searchParams.delete('manufacturer')
		}

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`

		router.push(newPathname, { scroll: false })
	}

	const SearchButton = () => (
		<button
			type='submit'
			className='bg-blue-100 rounded-full p-4 text-2xl font-extrabold hover:bg-blue-200'
		>
			<AiOutlineSearch />
		</button>
	)

	return (
		<form
			className=' flex sm:flex-row flex-col max-w-3xl w-full gap-4 sm:items-center items-end'
			onSubmit={handleSearch}
		>
			<div className='flex-1 flex bg-blue-50 rounded-full items-center h-10 w-full'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>

			<div className='flex-1 flex gap-3 bg-blue-50 rounded-full  items-center h-10 w-full'>
				<label
					htmlFor='modelSearch'
					className='text-gray-700 text-xl cursor-pointer pl-4'
				>
					<AiOutlineSearch />
				</label>
				<input
					id='modelSearch'
					type='text'
					className='bg-transparent outline-none w-full h-10'
					placeholder='Tiguan'
					onChange={e => {
						setModel(e.target.value)
					}}
				/>
			</div>
			<SearchButton />
		</form>
	)
}
export default SearchBar
