import { FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, fuel, limit, model, year } = filters

	const headers = {
		'X-RapidAPI-Key': '158d9eddbbmsh9fbcf9aaa3453f1p107016jsn73898209f461',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	}

	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`,
		{
			headers,
		}
	)

	const data = await response.json()

	return data
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50 // Base rental price per day in dollars
	const mileageFactor = 0.1 // Additional rate per mile driven
	const ageFactor = 0.05 // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search)

	searchParams.set(type, value)

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}
