import { CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface CarDetailsProps {
	isOpen: boolean
	closeModal: () => void
	car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10 p-6' onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<button
									onClick={closeModal}
									className='absolute right-2 top-2 rounded-full bg-primary-blue-100 p-2 z-10 text-xl'
								>
									<AiOutlineClose />
								</button>
								<div className='flex flex-col gap-5'>
									<div className='flex flex-col gap-3'>
										<div className='object-contain w-full h-[160px] relative bg-pattern bg-cover bg-center rounded-lg'>
											<Image
												src='/hero.png'
												alt='car model'
												fill
												className='object-contain'
											/>
										</div>
										<div className='flex gap-3 flex-row'>
											<div className='object-contain w-full h-[96px] relative bg-primary-blue-100 rounded-lg'>
												<Image
													src='/hero.png'
													alt='car model'
													fill
													className='object-contain'
												/>
											</div>
											<div className='object-contain w-full h-[96px] relative bg-primary-blue-100 rounded-lg'>
												<Image
													src='/hero.png'
													alt='car model'
													fill
													className='object-contain'
												/>
											</div>

											<div className='object-contain w-full h-[96px] relative bg-primary-blue-100 rounded-lg'>
												<Image
													src='/hero.png'
													alt='car model'
													fill
													className='object-contain'
												/>
											</div>
										</div>
									</div>

									<div className='flex flex-col gap-6'>
										<h2 className='font-bold capitalize text-xl text-gray-900'>
											{`${car.make} ${car.model} ${car.drive}`}
										</h2>
										<div className='flex flex-col gap-4'>
											{Object.entries(car).map(([key, value]) => (
												<div key={key} className='flex justify-between'>
													<h4 className='text-gray-500 capitalize'>
														{key.split('_').join(' ')}
													</h4>
													<p className='font-bold text-gray-700'>{value}</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
export default CarDetails
