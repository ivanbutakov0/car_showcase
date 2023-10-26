'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({
	title,
	customStyles,
	clickHandler,
	type,
}: CustomButtonProps) => {
	return (
		<button
			type={type || 'button'}
			className={`py-3 px-6 rounded-full ${customStyles}`}
			onClick={clickHandler}
		>
			{title}
		</button>
	)
}
export default CustomButton
