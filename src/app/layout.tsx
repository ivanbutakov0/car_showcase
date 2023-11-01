import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: 'Car Hub',
	description: 'Discover the best cars in the world',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} relative`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
