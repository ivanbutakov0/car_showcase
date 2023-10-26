import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className='flex pt-10 px-6 md:px-16 pb-20 w-full justify-between flex-col md:flex-row border border-gray-200 gap-10'>
				<div className='text-gray-700'>
					<Link href='/'>
						<Image src='/logo.svg' alt='logo' width={118} height={18} />
					</Link>
					<p className='mt-6'>Carhub 2023</p>
					<p>All Rights Reserved &copy;</p>
				</div>
				<div className='flex gap-10 md:gap-20 width-full flex-1 flex-wrap justify-start md:justify-end'>
					{footerLinks.map(link => (
						<div
							key={link.title}
							className='flex flex-col gap-1 md:gap-4 min-w-[170px]'
						>
							<h3 className='font-bold'>{link.title}</h3>
							{link.links.map(item => (
								<Link
									key={item.title}
									href={item.url}
									className='text-gray-500'
								>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>

			<div className='py-10 px-6 md:px-16 gap-5 flex flex-col md:flex-row justify-between'>
				<p className='text-gray-700'>@2023 CarHub. All rights reserved</p>
				<div className='text-gray-500 flex gap-10'>
					<Link href='/'>Privacy & Policy</Link>
					<Link href='/'>Terms & Condition</Link>
				</div>
			</div>
		</footer>
	)
}
export default Footer
