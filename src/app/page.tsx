import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: HomeProps) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || '',
	})

	const isDataEmpty = allCars.length < 1 || !allCars || !Array.isArray(allCars)

	return (
		<main className='overflow-hidden'>
			<Hero />
			<section className='max-w-[1440px] min-h-[500px] mx-auto p-16'>
				<div className='flex flex-col gap-3 mb-3'>
					<h1 className='font-extrabold text-4xl'>Car Catalogue</h1>
					<p className='text-gray-700'>Explore out cars you might like</p>
				</div>

				<div className='flex justify-between flex-wrap gap-3'>
					<SearchBar />

					<div className='flex flex-wrap gap-3'>
						<CustomFilter title='fuel' options={fuels} />
						<CustomFilter title='year' options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 pt-14'>
							{allCars.map((car, index) => (
								<CarCard car={car} key={index} />
							))}
						</div>
					</section>
				) : (
					<div>
						<h2>Oops, no results</h2>
					</div>
				)}
			</section>
		</main>
	)
}
