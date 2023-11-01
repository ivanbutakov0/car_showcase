'use client'

import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'
import { CustomButton } from '.'
import CarDetails from './CarDetails'

interface CarCardProps {
	car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
	const { city_mpg, year, make, model, transmission, drive } = car

	const rent = calculateCarRent(city_mpg, year)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col bg-primary-blue-100 rounded-3xl p-6 gap-10 hover:bg-white hover:shadow-xl group'>
			<div className='text-gray-800 flex flex-col gap-5'>
				<h2 className='capitalize font-extrabold  text-xl'>
					{make} {model}
				</h2>
				<p className='flex text-3xl font-extrabold'>
					<span className='text-sm font-semibold self-start'>$</span>
					{rent}
					<span className='text-sm font-semibold self-end'>/day</span>
				</p>
			</div>

			<div className='w-full h-40 relative'>
				<Image
					src='/hero.png'
					alt='car model'
					fill
					className='object-contain'
				/>
			</div>

			<div className='w-full relative'>
				<div className='flex justify-between items-center group-hover:invisible'>
					<div className='flex flex-col gap-2 items-center capitalize text-sm text-gray-500'>
						<Image
							src='/steering-wheel.svg'
							alt='transmission icon'
							width={20}
							height={20}
						/>
						<p>{transmission === 'a' ? 'automatic' : 'mechanic'}</p>
					</div>
					<div className='flex flex-col gap-2 items-center capitalize text-sm text-gray-500'>
						<Image src='/tire.svg' alt='tire icon' width={20} height={20} />
						<p>{drive}</p>
					</div>
					<div className='flex flex-col gap-2 items-center capitalize text-sm text-gray-500'>
						<Image src='/gas.svg' alt='gas icon' width={18} height={20} />
						<p>{city_mpg} MPG</p>
					</div>
				</div>
				<div className='hidden group-hover:flex absolute bottom-0 w-full left-0 z-10'>
					<CustomButton
						title='View More'
						clickHandler={() => setIsOpen(true)}
						customStyles='w-full bg-primary-blue text-white font-bold'
					/>
				</div>
			</div>

			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	)
}
export default CarCard
