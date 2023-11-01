'use client'

import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { SiVolkswagen } from 'react-icons/si'

const SearchManufacturer = ({
	manufacturer,
	setManufacturer,
}: SearchManufacturerProps) => {
	const [query, setQuery] = useState('')

	const filteredManufactures =
		query === ''
			? manufacturers
			: manufacturers.filter(manufacturer => {
					return manufacturer
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  })

	return (
		<div className='relative'>
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className='flex items-center gap-3'>
					<Combobox.Button className='pl-6 text-gray-600'>
						<SiVolkswagen />
					</Combobox.Button>
					<Combobox.Input
						className='outline-none bg-inherit'
						placeholder='Volkswagen...'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={event => setQuery(event.target.value)}
					/>
				</div>

				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
					afterLeave={() => setQuery('')}
				>
					<Combobox.Options className='absolute top-12 w-full max-h-[200px] overflow-y-auto border rounded-lg shadow-sm shadow-gray-500'>
						{filteredManufactures.length === 0 && query !== '' ? (
							<div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
								Nothing found
							</div>
						) : (
							filteredManufactures.map(manufacturer => (
								<Combobox.Option key={manufacturer} value={manufacturer}>
									{({ active, selected }) => (
										<span
											className={`relative block pl-10 py-3 cursor-pointer  ${
												active
													? 'bg-primary-blue text-white'
													: 'bg-white text-gray-700'
											}`}
										>
											{selected && (
												<AiOutlineCheck className='absolute left-2 h-1/2' />
											)}
											{manufacturer}
										</span>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</Combobox>
		</div>
	)
}
export default SearchManufacturer
