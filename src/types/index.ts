import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
	title: string
	customStyles?: string
	clickHandler?: MouseEventHandler<HTMLButtonElement>
	type?: 'button' | 'submit'
}

export interface SearchManufacturerProps {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
	city_mpg: number
	class: string
	combination_mpg: number
	cylinders: number
	displacement: number
	drive: string
	fuel_type: string
	highway_mpg: number
	make: string
	model: string
	transmission: string
	year: number
}

export interface CarCardProps {
	model: string
	make: string
	mpg: number
	transmission: string
	year: number
	drive: string
	cityMPG: number
}
