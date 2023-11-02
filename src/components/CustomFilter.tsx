'use client'

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const router = useRouter()
	const [selected, setSelected] = useState(options[0])

	const handleUpdateParams = (e: { title: string; value: string }) => {
		const newPathName = updateSearchParams(title, e.value.toLowerCase())

		router.push(newPathName, { scroll: false })
	}

	return (
		<div className='top-16 w-36'>
			<Listbox
				value={selected}
				onChange={e => {
					setSelected(e)
					handleUpdateParams(e)
				}}
			>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>{selected.title}</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<Image
								src='/chevron-up-down.svg'
								width={20}
								height={20}
								className='ml-4 object-contain'
								alt='chevron_up-down'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10'>
							{options.map(option => (
								<Listbox.Option
									key={option.title}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active
												? 'bg-primary-blue-100 text-primary-blue'
												: 'text-gray-900'
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{option.title}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-primary-blue'>
													<AiOutlineCheck />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}
export default CustomFilter
