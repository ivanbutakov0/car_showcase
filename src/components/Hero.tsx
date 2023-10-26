'use client'

import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
	const clickHandler = () => {
		console.log('clicked')
	}

	return (
		<section className='flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto'>
			<div className='flex-1 sm:px-16 px-6  pt-36'>
				<h1 className='2xl:text-[74px] sm:text-[60px] text-[50px] font-extrabold leading-[1.5] mb-5'>
					Find, book, rent a car—quick and super easy!
				</h1>
				<p className='text-2xl font-light mb-10'>
					Streamline your car rental experience with our effortless booking
					process.
				</p>
				<CustomButton
					title='Explore Cars'
					customStyles='bg-primary-blue text-white'
					clickHandler={clickHandler}
				/>
			</div>
			<div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen '>
				<div className=' relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
					<Image src='/hero.png' alt='hero' fill className='object-contain' />
				</div>

				<div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden' />
			</div>
		</section>
	)
}
export default Hero
