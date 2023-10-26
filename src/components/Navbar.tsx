import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'

const Navbar = () => {
	return (
		<header className='absolute w-full z-10  '>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center py-4 p-6 md:px-16 '>
				<Link href='/' className='p-1'>
					<Image src='/logo.svg' alt='logo' width={118} height={18} />
				</Link>

				<CustomButton
					title='Sign In'
					type='button'
					customStyles='bg-white text-primary-blue px-10 border border-primary-blue'
				/>
			</nav>
		</header>
	)
}
export default Navbar
